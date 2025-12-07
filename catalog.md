---
layout: page
title: Catalog
description: "Download Masba Studio’s product catalog and T-shirt size chart. Find all details you need for sublimation printing and apparel customization."

navbar_active: Catalog
---

{% capture catalog %}
	<div class="services-container">
      <div class="service-card">
        <img src="images/catalog-pdf.png" alt="Catalog PDF" style="height:150px; object-fit:cover; border-radius:12px;">
        <h3>📘Product Catalog (PDF)</h3>
        <p>Browse our full range of sublimation T-shirts, designs, and printing options.</p>
        <a href="files/MasbaStudio_Catalog.pdf" download="" class="btn-download">Download Catalog</a>
      </div>

      <div class="service-card">
        <img src="images/size-chart.jpg" alt="T-Shirt Size Chart" style="height:150px; object-fit:cover; border-radius:12px;">
        <h3>📏T-Shirt Size Chart</h3>
        <p>Check your perfect fit before ordering custom shirts with Masba Studio.</p>
        <a href="images/size-chart.jpg" download="" class="btn-download">Download Size Chart</a>
      </div>

      <div class="service-card">
        <img src="images/template-guide.jpg" alt="Design Template" style="height:150px; object-fit:cover; border-radius:12px;">
        <h3>🧩Design Template (Coming Soon)</h3>
        <p>Editable templates to help you create your own sublimation artwork easily.</p>
        <a href="#" class="btn-disabled">Coming Soon</a>
      </div>
    </div>
{% endcapture %}

{% include section.html
	title="Masba Studio Catalog"
	subtitle="Download our latest product catalog, size charts, and templates to make your project seamless."
	content=catalog
 %}

<section style="padding:40px 20px; background: #fff; text-align:center;">
	<h3>Need Custom Quote or Assistance?</h3>
	<a href="https://wa.me/60168590975?text=Hi%20Masba%20Studio!%20I'm%20interested%20in%20your%20catalog." target="_blank" class="whatsapp-btn">📲 Chat on WhatsApp</a>
</section>