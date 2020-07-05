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
		
		<article class="portfolio-piece box">
			<h4><b><i>Hidden Client</i> Fake Accounts Detection</b></h4>
			<p><b>Description:</b>
			    A hidden client have a social network. To attract people joining their network, they orginize some mini games, 
			    such as lucky draw, withdrawal cards, ... Some evil people create many fake accounts in my client's social network, 
			    and use automatic tools to control those accounts to join mini games and get gifts. It's too bad for my client. 
			    They want me to help them to build a system to detect those fake accounts.
			</p>
			<p><b>Contribution:</b> My system detects an account that is fake or not based on 2 factors:
			<ul>
			    <li>Account's name: Normally, fake accounts' name are random strings (jkh123AAb) or have same pattern 
			    with existing accounts (tientuan1, tientuan2, tientuan3). I built a language model to detect a string 
			    that is random or not and used trie algorithm to detect patterns of account's names.</li>
			    <li>Account's action history: fake accounts are created with only one purpose, joining mini games and 
			    getting gifts. So, their actions in the system are not complex as real human's accounts. I built a binary 
			    classification based on action history of accounts to  solve this problem.</li>
			</ul>

			</p>
			<p><b>Technologies used:</b> sckit-learn, pandas, kenlm, flask, ...</p>
		</article>
		
		<article class="portfolio-piece box">
			<h4><b><i>Hidden Client</i> Visual Search</b></h4>
			<p><b>Description:</b>
			    Other hidden client have a tool to help people to have smart experience on retail platforms. They face to 
			    a hard problem that is finding similar products on many retail platforms. Title, tags, decription of products 
			    are sometimes different although they consider a same product. Visual information (images of products) is very
			    helpful in this situation. My client order me to build a visual search system for 70M products (each product has averagely 5 images.).
			</p>
			<p><b>Contribution:</b> My solution contains 2 stages:
			<ul>
			    <li>Image embedding: I use Efficient Net to extract deep visual feature from product's images.</li>
			    <li>Approx. Similar search: To handle a huge amount of images, I use ngt (is developed by Yahoo Japan) to index and 
			    search image vectors.</li>
			</ul>
			</p>
			<p><b>Technologies used:</b> pytorch, ngt, ...</p>
			This project is still developed with other applications in my client's tool.
		</article>
		
	
	</div>
</div>
