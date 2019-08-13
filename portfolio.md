---
layout: page
title: "Portfolio"
group: corePages
description: ""
headerStyle: title
---
{% include JB/setup %}

<div class="row justify-center">
	<div id="portfolio" class="col-lg-8 col-md-10 col-12">
	
	    <article class="portfolio-piece box">
			<h4><b><i>Money Lover</i> Transaction categorization</b></h4>
			<p><b>Description:</b>
			    Money Lover is a PFM (Personal Financial Management) mobile app. One of Money Lover's significant feature 
			    is connecting to bank account which is named Linked Wallet. It helps users to get automatically their bank transactions 
			    with specific categories which express the purpose of users in those transactions (shopping, cafe, paycheck, ...).
			</p>
			<p><b>Contribution:</b> Based on information of transactions (amount, note, bank's name, ...), I built a module to classify 
			    them into specific categories.</p>
			<p><b>Technologies used:</b> sckit-learn, pandas, flask, ...</p>
			<p>To experience my module, you can connect your bank account with Money Lover. 
			Note that this feature only works with Vietnamese banks. Try and enjoy it.<br/>
			This image shows 2 examples of <i>Transaction categorization</i> in my linked wallet.</p>
			<div class="row">
				<div class="col-lg-12 col-sm-12">
					<img src="{{ BASE_PATH }}/assets/images/portfolio/MoneyLover_Categorization.JPG"/>
				</div>
			</div>
		</article>
	
	</div>
</div>
