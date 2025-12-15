---
layout: base
title: Perkhidmatan Kami
---

{% capture our_services %}
<div class="services">
	<div class="service">
		<img src="{{ "/assets/images/digital-marketing.png" | relative_url }}" alt="Digital Marketing Service" class="service-image">
		<div class="service-detail">
			<span class="service-title">Digital Marketing</span>
			<p class="service-description">
				Full-service digital marketing package yang menawarkan professional graphic design, video editing, dan custom website development untuk perniagaan anda. Semua servis ini tailor-made supaya sesuai dengan brand dan target audience anda.
			</p>
			<a href="{{ "#" | relative_url }}" class="service-cta">Muat Turun Katalog</a>
		</div>
	</div>
	<div class="service">
		<img src="{{ "/assets/images/printing.png" | relative_url }}" alt="Brand Printing Service" class="service-image">
		<div class="service-detail">
			<span class="service-title">Brand Printing</span>
			<p class="service-description">
				Kami menawarkan T-Shirt Sublimation, Business Cards, Bunting Banners, dan banyak lagi. Sesuai untuk personal use, events, atau business promotions, semua produk kami custom-made & berkualiti tinggi mengikut keperluan anda.			</p>
			<a href="{{ "#" | relative_url }}" class="service-cta">Muat Turun Katalog</a>
		</div>
	</div>
</div>
{% endcapture %}

{% include section.html
	title="Perkhidmatan Kami"
	subtitle="Temui koleksi kreatif & branding kami untuk keperluan perniagaan anda."
	is_h1=true
	content=our_services
%}

{% include main-cta.html %}