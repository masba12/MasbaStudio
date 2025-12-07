---
layout: page
title: "Masba Studio Services - Custom Design & Printing"
description: "From T-shirt sublimation to creative design, Masba Studio delivers top-quality results for your brand."

#navigation
navbar_active: Services
---

{%capture services%}

<div class="search-container">
	<input type="text" id="searchInput" placeholder="🔍 Search services...">
</div>

<div class="product-grid" id="serviceGrid">
	{% for service in site.data.services %}
		<div class="product-card" data-name="{{service.title}}">
			<img src="{{service.image | relative_url}}" alt="{{service.title}}">
			<div class="product-info">
				<h3>{{service.title}}</h3>
				<p>{{service.description}}</p>
				<a class="whatsapp-btn" href="https://wa.me/60168590975?text=Hello%20Masba%20Studio!%20I'm%20interested%20in%20your%20{{service.title | uri_escape}}%20Service." target="_blank">Chat via WhatsApp</a>
			</div>
		</div>
	{% endfor %}
</div>

<script>
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('open');
    });

    // Service search filter
    const searchInput = document.getElementById('searchInput');
    const serviceCards = document.querySelectorAll('.product-card');
    searchInput.addEventListener('keyup', function() {
      const term = this.value.toLowerCase();
      serviceCards.forEach(card => {
        const name = card.getAttribute('data-name').toLowerCase();
        card.style.display = name.includes(term) ? 'block' : 'none';
      });
    });
</script>

{%endcapture%}

{%include section.html
	title="Our Services"
	subtitle="Professional creative and printing services to make your brand stand out."
	content=services
 %}