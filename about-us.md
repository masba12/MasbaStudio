---
layout: base
title: About Us
---

{% capture about_us %}
<div class="goals">
	<div class="goal">
		<span class="goal-title">Misi</span>
		<p>Menyediakan perkhidmatan kreatif berkualiti tinggi yang membantu individu dan perniagaan menonjol profesional.</p>
	</div>
	<div class="goal">
		<span class="goal-title">Visi</span>
		<p>Menjadi studio kreatif pilihan utama di Malaysia untuk perkhidmatan reka bentuk grafik dan produk digital profesional.</p>
	</div>
</div>
{% endcapture %}

{% include section.html
	title="Tentang Kami"
	subtitle="Komitmen Kami untuk Anda"
	content=about_us
	is_h1=true
%}
