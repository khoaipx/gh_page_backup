---
layout: default
title: Pham Xuan Khoai
tagline: Data Scientist
section: home
analytics: true
headerStyle: small
---
{% include JB/setup %}

<div class="row justify-between">

	<div class="col-xl-8 col-lg-10 col-12 stagger-animation">
		<div class="about flex align-items-center">
			<img class="anim-item profile-picture align-self-start" src="{{ site.avatar_path }}">
			<div class="about-detail anim-item">
				<h1 class="title">{{ page.title }}</h1>
				<h3 class="desc">{{ page.tagline }}</h3>
				<div class="social-links flex align-items-center">
					<a class="icon-github" href="https://github.com/{{ site.author.github }}" data-toggle="tooltip" data-placement="bottom" title="Github" target="_blank"></a>
					<a class="icon-linkedin" href="https://www.linkedin.com/in/{{ site.author.linkedin }}" data-toggle="tooltip" data-placement="bottom" title="Linkedin" target="_blank"></a>
					<a class="icon-facebook2" href="https://www.facebook.com/{{ site.author.facebook }}" data-toggle="tooltip" data-placement="bottom" title="Facebook" target="_blank"></a>
					<a class="icon-mail" href="mailto:{{ site.author.email }}" data-toggle="tooltip" data-placement="bottom" title="Email"></a>
					<a class="icon-file-pdf" href="{{ site.cv_url }}" data-toggle="tooltip" data-placement="bottom" title="Download CV"></a>
				</div>
			</div>
		</div>

		<div class="detail">
			<div class="btns-wrapper anim-item">
				<a href="/about" class="btn btn-primary">Hire Me</a>
				<a href="/CV" class="btn btn-outline-primary">Résumé</a>
				<a href="/portfolio" class="btn btn-outline-info">Portfolio</a>
			</div>
		</div>

	</div>

</div>
