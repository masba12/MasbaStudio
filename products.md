---
layout: page
title: "Masba Studio Products - Custom T-Shirts & Accessories"

#navigation
navbar_active: Products

# content
products:
  - name: Graphic Tee
    image: /assets/images/products/sublimation_tshirt.jpg
    price_old: "55.00"
    price_new: "40.00"

  - name: Custom Sublimation
    image: /assets/images/products/sublimation_tshirt2.jpg
    price_old: "65.00"
    price_new: "50.00"

  - name: Sports Jersey
    image: /assets/images/products/sublimation_tshirt3.jpg
    price_new: "60.00"

  - name: Button Badge
    image: /assets/images/products/BUTTON BADGE PRINTING.jpg
    price_new: "5.00"

  - name: Lanyard Printing
    image: /assets/images/products/LANYARD_ID_CARD_PRINTING.png
    price_new: "8.00"
---

{%capture products%}

<div class="search-container">
	<input type="text" id="searchInput" placeholder="🔍 Search products...">
</div>

<div class="product-grid" id="productGrid">
  {% for product in page.products %}
    <div class="product-card" data-name="{{ product.name }}">
      <img src="{{ product.image | relative_url }}" alt="{{ product.name }}">
      <div class="product-info">
        <h3>{{ product.name }}</h3>
        <p>
          {% if product.price_old %}
            <span class="old-price">RM{{ product.price_old}}</span>
          {% endif %}
          <span class="new-price">RM{{ product.price_new }}</span>
        </p>
        <a class="whatsapp-btn"
           href="https://wa.me/60168590975?text=Hi%20Masba%20Studio!%20I'm%20interested%20in%20{{ product.name | uri_escape }}%20(RM{{ product.price_new}})"
           target="_blank">
          Order via WhatsApp
        </a>
      </div>
    </div>
  {% endfor %}
</div>

<script>
    // Mobile menu toggle
    document.querySelector('.menu-toggle').addEventListener('click', () => {
      document.querySelector('.nav-links').classList.toggle('active');
    });

    // Product search filter
    const searchInput = document.getElementById('searchInput');
    const productCards = document.querySelectorAll('.product-card');
    searchInput.addEventListener('keyup', function() {
      const term = this.value.toLowerCase();
      productCards.forEach(card => {
        const name = card.getAttribute('data-name').toLowerCase();
        card.style.display = name.includes(term) ? 'block' : 'none';
      });
    });
</script>
{%endcapture%}

{% include section.html
	title="Our Products"
	subtitle="Explore our premium sublimation products. Customized for your brand, team, or event."
	content=products
 %}