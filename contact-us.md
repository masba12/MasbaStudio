---
layout: base
title: Hubungi Kami
description: "Ada soalan atau ingin mulakan projek? Hubungi kami hari ini untuk perkhidmatan grafik, video dan pembangunan laman web yang profesional."
---

{% capture contact_us %}
<div class="main-contact-us">
	<div class="contact-details">
		<div class="contact-option">
			<img src="{{ "/assets/images/pin.svg" | relative_url }}" alt="Pin Icon" class="option-icon">
			<span class="option-value">Hutan Melintang, Perak</span>
		</div>
		<div class="contact-option">
			<img src="{{ "/assets/images/hand-phone.svg" | relative_url }}" alt="Hand Phone Icon" class="option-icon">
			<span class="option-value">+6016-859 0975</span>
		</div>
		<div class="contact-option">
			<img src="{{ "/assets/images/clock.svg" | relative_url }}" alt="Clock Icon" class="option-icon">
			<span class="option-value">
				Isnin - Ahad
				<br>
				9:00 pagi - 6:00 petang
			</span>
		</div>
		<div class="contact-option">
			<div class="social-medias">
				<a href="#">
					<img src="{{ "/assets/images/instagram-logo.png" | relative_url }}" alt="Instagram Logo">
				</a>
				<a href="#">
					<img src="{{ "/assets/images/facebook-logo.png" | relative_url }}" alt="Facebook Logo">
				</a>
				<a href="#">
					<img src="{{ "/assets/images/x-logo.png" | relative_url }}" alt="X(Twitter) Logo">
				</a>
			</div>
		</div>
	</div>
	<div class="google-map">
		<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63690.17313695379!2d100.86386566094558!3d3.8879874135804386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cb424a8c52f35d%3A0x9e7c35b7cec27117!2sHutan%20Melintang%2C%20Perak!5e0!3m2!1sen!2smy!4v1765758678545!5m2!1sen!2smy" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
		</iframe>
	</div>
</div>
{% endcapture %}

{% capture talk_to_us %}
<div class="talk-to-us">
	<form class="contact-form" id="contact-form">
		<div class="input-group">
			<label for="name" class="input-label">Nama</label>
			<input type="text" id="name" class="input-field">
		</div>
		<div class="input-group">
			<label for="message" class="input-label">Mesej</label>
			<textarea class="input-field" id="message"></textarea>
		</div>
		<div class="input-group">
			<button class="submit-button" type="submit">
				<img src="{{ "/assets/images/whatsapp-logo.png" | relative_url }}" alt="Whatsapp logo">
				<span>Hantar melalui WhatsApp</span>
			</button>
		</div>
	</form>
</div>

<script>
	const contactForm = document.querySelector("#contact-form")
	const nameInput = contactForm.querySelector("#name")
	const messageInput = contactForm.querySelector("#message")
	const waNumber = "60168590975"

	contactForm.addEventListener("submit", function (e) {
		e.preventDefault()

		const name = nameInput.value.trim()
		const message = messageInput.value.trim()

		const text = `Hi, my name is ${name}\n\n${message}`
		const encodedText = encodeURIComponent(text)

		location.href = `https://wa.me/${waNumber}?text=${encodedText}`
	})
</script>

{% endcapture %}

{% include section.html
	title="Hubungi Kami"
	subtitle="Mulakan Projek Digital Anda Bersama Kami"
	is_h1=true
	content=contact_us
 %}

{% include section.html
	title="Bercakap dengan Kami"
	subtitle="Mari Berbincang dan Mulakan Projek Anda"
	is_h1=false
	content=talk_to_us
 %}