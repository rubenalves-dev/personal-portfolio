/**
 * Image Management Utility
 * Handles image loading with fallback to default images
 */

export class ImageManager {
	static readonly DEFAULT_IMAGES = {
		project: 'images/placeholder-project.jpg',
		avatar: 'images/placeholder-avatar.jpg',
		generic: 'images/placeholder.jpg'
	};

	private static imageCache = new Map<string, boolean>();

	/**
	 * Get an image URL with fallback support
	 * @param imageUrl - The image URL to load
	 * @param fallbackType - Type of fallback image to use
	 * @returns Promise that resolves to the valid image URL
	 */
	static async getImageUrlAsync(
		imageUrl: string | undefined | null,
		fallbackType: keyof typeof ImageManager.DEFAULT_IMAGES = 'generic'
	): Promise<string> {
		if (!imageUrl) {
			return this.DEFAULT_IMAGES[fallbackType];
		}

		const cached = this.imageCache.get(imageUrl);
		if (cached !== undefined) {
			return cached ? imageUrl : this.DEFAULT_IMAGES[fallbackType];
		}

		const isValid = await this.validateImage(imageUrl);
		this.imageCache.set(imageUrl, isValid);

		return isValid ? imageUrl : this.DEFAULT_IMAGES[fallbackType];
	}

	/**
	 * Synchronously get image URL with fallback (for immediate rendering)
	 * @param imageUrl - The image URL to load
	 * @param fallbackType - Type of fallback image to use
	 * @returns The image URL or fallback
	 */
	static getImageUrl(
		imageUrl: string | undefined | null,
		fallbackType: keyof typeof ImageManager.DEFAULT_IMAGES = 'generic'
	): string {
		if (!imageUrl) {
			return this.DEFAULT_IMAGES[fallbackType];
		}

		const cached = this.imageCache.get(imageUrl);
		if (cached !== undefined) {
			return cached ? imageUrl : this.DEFAULT_IMAGES[fallbackType];
		}

		this.validateImage(imageUrl).then((isValid) => {
			this.imageCache.set(imageUrl, isValid);
		});

		return imageUrl;
	}

	/**
	 * Validate if an image can be loaded
	 * @param imageUrl - The image URL to validate
	 * @returns Promise that resolves to true if valid, false otherwise
	 */
	private static validateImage(imageUrl: string): Promise<boolean> {
		return new Promise((resolve) => {
			if (typeof window === 'undefined') {
				resolve(true);
				return;
			}

			const img = new Image();
			img.onload = () => resolve(true);
			img.onerror = () => resolve(false);
			img.src = imageUrl;

			setTimeout(() => resolve(false), 5000);
		});
	}

	/**
	 * Get the fallback image URL for a specific type
	 * @param fallbackType - Type of fallback image
	 * @returns The fallback image URL
	 */
	static getFallbackImage(
		fallbackType: keyof typeof ImageManager.DEFAULT_IMAGES = 'generic'
	): string {
		return this.DEFAULT_IMAGES[fallbackType];
	}

	/**
	 * Preload multiple images
	 * @param imageUrls - Array of image URLs to preload
	 */
	static async preloadImages(imageUrls: string[]): Promise<void> {
		await Promise.all(
			imageUrls.map(async (url) => {
				const isValid = await this.validateImage(url);
				this.imageCache.set(url, isValid);
			})
		);
	}

	/**
	 * Clear the image cache
	 */
	static clearCache(): void {
		this.imageCache.clear();
	}

	/**
	 * Set custom default images
	 * @param defaults - Object with custom default image paths
	 */
	static setDefaults(defaults: Partial<typeof ImageManager.DEFAULT_IMAGES>): void {
		Object.assign(this.DEFAULT_IMAGES, defaults);
	}
}

/**
 * Svelte action to handle image loading with fallback
 * Usage: <img use:imageWithFallback={{ fallback: 'project' }} src={imageUrl} alt="..." />
 */
export function imageWithFallback(
	node: HTMLImageElement,
	options?: {
		fallback?: keyof typeof ImageManager.DEFAULT_IMAGES;
		onError?: (error: Event) => void;
	}
) {
	const fallbackType = options?.fallback || 'generic';
	const originalSrc = node.src;

	const handleError = (event: Event) => {
		if (node.src !== ImageManager.getFallbackImage(fallbackType)) {
			node.src = ImageManager.getFallbackImage(fallbackType);
			ImageManager['imageCache'].set(originalSrc, false);
		}
		options?.onError?.(event);
	};

	node.addEventListener('error', handleError);

	return {
		destroy() {
			node.removeEventListener('error', handleError);
		}
	};
}
