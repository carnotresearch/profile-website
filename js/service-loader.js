/**
 * Service Page Loader
 * Dynamically loads and renders service pages from JSON data
 */

(function() {
	'use strict';

	// Get service ID from URL or filename
	function getServiceId() {
		const path = window.location.pathname;
		const filename = path.split('/').pop() || '';
		
		// Extract service ID from filename (e.g., "service-ai-research-consulting.html" -> "ai-research-consulting")
		if (filename.startsWith('service-') && filename.endsWith('.html')) {
			return filename.replace('service-', '').replace('.html', '');
		}
		
		// Try to get from URL hash or query parameter
		const urlParams = new URLSearchParams(window.location.search);
		const hash = window.location.hash.replace('#', '');
		
		if (urlParams.get('service')) {
			return urlParams.get('service');
		}
		
		if (hash) {
			return hash;
		}
		
		// Default fallback
		return 'ai-research-consulting';
	}

	// Load service data from JSON
	async function loadServiceData(serviceId) {
		try {
			const response = await fetch('data/services.json');
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const data = await response.json();
			
			if (data.services && data.services[serviceId]) {
				return data.services[serviceId];
			}
			
			console.error(`Service "${serviceId}" not found in services.json`);
			return null;
		} catch (error) {
			console.error('Error loading service data:', error);
			return null;
		}
	}

	// Render service page
	function renderService(serviceData) {
		if (!serviceData) {
			console.error('No service data provided');
			return;
		}

		// Update page title
		document.getElementById('page-title').textContent = `${serviceData.title} | Carnot Research`;

		// Update header section
		const iconWrapper = document.getElementById('service-icon');
		if (iconWrapper) {
			iconWrapper.innerHTML = `<i class="${serviceData.icon}"></i>`;
		}

		const chip = document.getElementById('service-chip');
		if (chip) {
			chip.textContent = serviceData.chip;
		}

		const titleMain = document.getElementById('service-title-main');
		const titleAccent = document.getElementById('service-title-accent');
		if (titleMain && titleAccent) {
			titleMain.textContent = serviceData.titleMain;
			if (serviceData.titleAccent) {
				titleAccent.textContent = serviceData.titleAccent;
			} else {
				titleAccent.style.display = 'none';
			}
		}

		const tagline = document.getElementById('service-tagline');
		if (tagline) {
			tagline.textContent = serviceData.tagline;
		}

		// Render service cards
		const grid = document.getElementById('service-grid');
		if (grid && serviceData.features) {
			grid.innerHTML = '';

			// Render feature cards
			serviceData.features.forEach(feature => {
				const card = document.createElement('div');
				card.className = 'service-card';
				card.innerHTML = `
					<div class="service-card-icon">
						<i class="${feature.icon}"></i>
					</div>
					<div class="service-card-title">${escapeHtml(feature.title)}</div>
					<div class="service-card-text">${escapeHtml(feature.description)}</div>
				`;
				grid.appendChild(card);
			});

			// Render CTA card
			if (serviceData.cta) {
				const ctaCard = document.createElement('div');
				ctaCard.className = 'service-card service-card-cta';
				ctaCard.innerHTML = `
					<div class="service-card-icon">
						<i class="${serviceData.cta.icon}"></i>
					</div>
					<div class="service-card-title">${escapeHtml(serviceData.cta.title)}</div>
					<div class="service-card-text">${escapeHtml(serviceData.cta.description)}</div>
					<a href="index.html#section-contact" class="cta-button">
						<span data-i18n="service.contact_button">Contact Us</span>
						<i class="icon-angle-right"></i>
					</a>
				`;
				grid.appendChild(ctaCard);
			}
		}

		// Render tags
		const tagsContainer = document.getElementById('service-tags');
		if (tagsContainer && serviceData.tags) {
			tagsContainer.innerHTML = '';
			serviceData.tags.forEach(tag => {
				const tagElement = document.createElement('div');
				tagElement.className = 'service-tag';
				tagElement.innerHTML = `
					<i class="icon-check"></i>
					<span>${escapeHtml(tag)}</span>
				`;
				tagsContainer.appendChild(tagElement);
			});
		}
	}

	// Escape HTML to prevent XSS
	function escapeHtml(text) {
		const div = document.createElement('div');
		div.textContent = text;
		return div.innerHTML;
	}

	// Initialize service page
	async function init() {
		const serviceId = getServiceId();
		const serviceData = await loadServiceData(serviceId);
		
		if (serviceData) {
			renderService(serviceData);
		} else {
			// Show error message
			const grid = document.getElementById('service-grid');
			if (grid) {
				grid.innerHTML = `
					<div class="service-card" style="grid-column: 1 / -1; text-align: center; padding: 40px;">
						<h3>Service Not Found</h3>
						<p>The requested service could not be loaded. Please check the URL or contact support.</p>
						<a href="index.html#section-services" class="back-button" style="margin-top: 20px; display: inline-block;">
							<i class="icon-angle-left"></i>
							<span>Back to Services</span>
						</a>
					</div>
				`;
			}
		}
	}

	// Run when DOM is ready
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();

