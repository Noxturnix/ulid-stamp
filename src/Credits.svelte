<script>
	import discord from './img/discord-logo.svg'
	import github from './img/github-logo.png'
</script>

<div class="credits">
	<p>
		<a class="github" href="https://github.com/Noxturnix/ulid-stamp"
			><img height="24px" src={github} alt="GitHub" style="" /><span
				style="text-decoration: none">&nbsp;</span
			>GitHub</a
		>
	</p>
	<p>
		<span>Original project:</span>
		<span
			><a href="https://github.com/vegeta897/snow-stamp" target="_blank"
				>snow-stamp</a
			></span
		>
	</p>
</div>

<style>
	.credits {
		color: #777;
		text-align: center;
		font-size: 1em;
		margin: 1em auto 0;
	}
	:global(body.dark-mode) .credits {
		color: #bbb;
	}

	code {
		font-family: 'Fira Code', monospace;
		font-size: 0.9em;
		padding: 0.2em 0.3em;
		background: #f4f4f4;
	}

	:global(body.dark-mode) code {
		color: #ccc;
		background: #333;
	}

	span {
		display: inline-block;
	}

	a.github img {
		position: relative;
		margin-right: 2px;
		top: 5px;
		margin-top: -5px;
	}

	:global(body.dark-mode) a.github img {
		filter: invert();
	}
</style>
