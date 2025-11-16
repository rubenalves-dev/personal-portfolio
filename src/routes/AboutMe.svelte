<script>
	import Section from '$lib/components/ui/layout/section.svelte';
	import me from '$lib/assets/images/me-edges.webp';
</script>

<Section id="about" title="About me">
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
		<div class="relative me-12 overflow-clip">
			<img src={me} alt="Myself" class="absolute inset-0 h-full w-full object-contain" />
		</div>

		<div>
			<h3 class="mb-8 hidden md:block">Who am I?</h3>
			<p class="mb-4">
				I'm a <strong>fullstack developer</strong> from Portugal focused on creating scalable and bullet proof solutions,
				planning, designing, building and implementing them for your needs.
			</p>

			<p class="mb-4">
				I'm <strong>passionate</strong> about emerging technologies and AI innovations, always seeking better ways to
				work. Whether it's a new framework, library, or development practice, <strong>I'm constantly learning</strong>,
				trying to be more knowledgeable every day, so I can <strong>deliver even more</strong> and be aware of the new possibilities
				for the market.
			</p>

			<p class="mb-4">
				<strong>Got interested?</strong> Let's collaborate and bring <strong>YOUR</strong> ideas to life!
			</p>
		</div>
	</div>
</Section>
