---
layout: page
title: About Us
description: "Discover Masba Studio: creative printing, sublimation, custom T-shirt, and design services in Malaysia."
big_title: Who We Are
subtitle: Professional sublimation printing, custom T-shirt design, and creative solutions trusted across Malaysia.
navbar_active: About Us
---

{% capture about_us %}
<div class="about-container" style="display:grid; grid-template-columns:repeat(auto-fit,minmax(300px,1fr)); gap:30px; max-width:1200px; margin:0 auto;">
	<div class="about-card">
	<img src="images/about-us.jpg" alt="Masba Studio Team" style="border-radius:12px; width:100%; height:200px; object-fit:cover;">
	<h3>Our Story</h3>
	<p>Masba Studio is a creative company based in Hutan Melintang, Perak. We help individuals and businesses bring their visions to life through high-quality sublimation printing, graphic design, and custom product solutions. Our passion is turning creativity into tangible, memorable products for our clients.</p>
	</div>
	<div class="about-card">
	<h3>Our Mission</h3>
	<p>Provide professional and affordable printing and design services while ensuring customer satisfaction and confidence in every project.</p>
	</div>
	<div class="about-card">
	<h3>Why Choose Us</h3>
	<ul>
		<li>High-quality sublimation printing materials</li>
		<li>Fast turnaround and reliable service</li>
		<li>Custom designs tailored to your needs</li>
		<li>Friendly customer support and local expertise</li>
	</ul>
	</div>
</div>
{%endcapture%}

{%capture contact_us%}
<div class="contact-container" style="display:flex; flex-wrap:wrap; max-width:1000px; margin:0 auto; gap:40px; justify-content:center;">
	<!-- Contact Info -->
	<div class="contact-card" style="flex:1 1 300px;">
	<h3>Get in Touch</h3>
	<p>📍 Hutan Melintang, Perak</p>
	<p>📞 +6016-859 0975</p>
	<p>⏰ Mon – Sat: 9:00 AM – 6:00 PM</p>
	<p><a href="https://wa.me/60168590975" target="_blank" class="whatsapp-btn">Chat via WhatsApp</a></p>
	</div>
	<!-- Contact Form -->
	<div class="contact-card" style="flex:1 1 400px;">
	<h3>Send a Message</h3>
	<form action="#" method="POST" style="display:flex; flex-direction:column; gap:15px;">
		<label for="name">Your Name</label>
		<input type="text" id="name" name="name" placeholder="Enter your name" required="">
		<label for="message">Message</label>
		<textarea id="message" name="message" rows="5" placeholder="Type your message here..." required=""></textarea>
		<a href="https://wa.me/60168590975?text=Hello%20Masba%20Studio!" class="whatsapp-btn" target="_blank">Chat via WhatsApp</a>
	</form>
	</div>
</div>
{%endcapture%}

{% include section.html 
	title="Who We Are"
	subtitle="Professional sublimation printing, custom T-shirt design, and creative solutions trusted across Malaysia."
	content=about_us
%}

<div id="contact">
{% include section.html 
	title="Contact Us"
	subtitle="Reach out for inquiries or custom orders"
	content=contact_us
%}
</div>