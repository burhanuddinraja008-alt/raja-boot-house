/* RBH language selector: English default; translate UI copy, never product names or prices. */
(function () {
  var labels = {
    'Download App':['ऐप डाउनलोड करें','ॲप डाउनलोड करा'], 'Login':['लॉग इन','लॉग इन'], 'Logout':['लॉग आउट','लॉग आउट'],
    'My profile & settings':['मेरी प्रोफ़ाइल और सेटिंग्स','माझे प्रोफाइल आणि सेटिंग्ज'], 'Owner panel':['मालिक पैनल','मालक पॅनेल'],
    'Walk With Quality':['गुणवत्ता के साथ चलें','दर्जेदार पावलांसोबत'],
    'Order online - confirm size & delivery on WhatsApp.':['ऑनलाइन ऑर्डर करें - साइज़ और डिलीवरी WhatsApp पर पक्की करें.','ऑनलाइन ऑर्डर करा - साईज आणि डिलिव्हरी WhatsApp वर निश्चित करा.'],
    'Share this app with your friends':['यह ऐप दोस्तों को भेजें','हे ॲप मित्रांना शेअर करा'],
    'Sports Shoes':['स्पोर्ट्स शूज़','स्पोर्ट्स शूज'], 'Sandals':['सैंडल','सँडल'], 'Sliders':['स्लाइडर','स्लायडर'], 'Flip-flops':['चप्पल','चप्पल'], 'Shoes':['जूते','बूट'], 'School Shoes':['स्कूल शूज़','शाळेचे बूट'], 'Kids Footwear':['बच्चों के जूते','मुलांचे बूट'], 'Ladies':['महिलाएँ','महिला'],
    'Trending':['ट्रेंडिंग','ट्रेंडिंग'], 'New Arrivals':['नया माल','नवीन माल'], 'Best Sellers':['सबसे ज़्यादा बिकने वाले','सर्वाधिक विक्री'], 'Recently Viewed':['हाल में देखे गए','अलीकडे पाहिलेले'], 'Recommended For You':['आपके लिए सुझाव','तुमच्यासाठी शिफारस'], 'Fancy & Formal':['फ़ैंसी और फ़ॉर्मल','फॅन्सी आणि फॉर्मल'],
    'All':['सभी','सर्व'], 'Under ₹200':['₹200 से कम','₹200 पेक्षा कमी'], 'Under ₹500':['₹500 से कम','₹500 पेक्षा कमी'],
    'Everyone':['सभी के लिए','सर्वांसाठी'], 'Men':['पुरुष','पुरुष'], 'Women':['महिलाएँ','महिला'], 'Kids':['बच्चे','मुले'], 'Any size':['कोई भी साइज़','कोणताही साईज'],
    'Sort: Featured':['क्रम: चुनिंदा','क्रम: निवडक'], 'Price: Low to High':['दाम: कम से ज़्यादा','किंमत: कमी ते जास्त'], 'Price: High to Low':['दाम: ज़्यादा से कम','किंमत: जास्त ते कमी'],
    'How to Order':['ऑर्डर कैसे करें','ऑर्डर कशी करावी'], 'Choose your favourite footwear.':['अपना पसंदीदा जूता चुनें.','आवडते पादत्राणे निवडा.'], "Tap 'Order on WhatsApp'.":["'WhatsApp पर ऑर्डर' दबाएँ.","'WhatsApp वर ऑर्डर' दाबा."], 'Confirm size, stock & delivery details on WhatsApp.':['साइज़, स्टॉक और डिलीवरी WhatsApp पर पक्की करें.','साईज, स्टॉक आणि डिलिव्हरी WhatsApp वर निश्चित करा.'],
    'Size Guide':['साइज़ गाइड','साईज मार्गदर्शक'], 'UK / IND Size':['UK / IND साइज़','UK / IND साईज'], 'Foot length (approx.)':['पैर की लंबाई (लगभग)','पायाची लांबी (अंदाजे)'],
    'Product Details':['उत्पाद की जानकारी','उत्पादनाची माहिती'], 'Colour':['रंग','रंग'], 'Size (UK / IND)':['साइज़ (UK / IND)','साईज (UK / IND)'], 'Quantity':['संख्या','प्रमाण'], 'Add to Bag':['बैग में डालें','बॅगमध्ये जोडा'], 'Order on WhatsApp':['WhatsApp पर ऑर्डर करें','WhatsApp वर ऑर्डर करा'], 'Notify me on WhatsApp':['WhatsApp पर सूचना माँगें','WhatsApp वर सूचना मागवा'],
    'Available offers':['मौजूदा ऑफ़र','उपलब्ध ऑफर्स'], 'How to order':['ऑर्डर कैसे करें','ऑर्डर कशी करावी'], 'See the product on a video call':['वीडियो कॉल पर उत्पाद देखें','व्हिडिओ कॉलवर उत्पादन पाहा'], 'Make the payment':['भुगतान करें','पेमेंट करा'], 'Order dispatch':['ऑर्डर भेजा जाएगा','ऑर्डर पाठवला जाईल'], 'You may also like':['ये भी पसंद आ सकते हैं','हेही आवडू शकते'],
    '100% Genuine':['100% असली','100% अस्सल'], 'brands':['ब्रांड','ब्रँड'], 'Local shop':['स्थानीय दुकान','स्थानिक दुकान'], 'confirm your order on WhatsApp':['ऑर्डर WhatsApp पर पक्का करें','ऑर्डर WhatsApp वर निश्चित करा'],
    'Your Bag':['आपका बैग','तुमची बॅग'], 'Your Wishlist':['आपकी पसंद','तुमची आवड'], 'Notifications':['सूचनाएँ','सूचना'], 'My Profile':['मेरी प्रोफ़ाइल','माझे प्रोफाइल'], 'My Account':['मेरा खाता','माझे खाते'], 'My Orders':['मेरे ऑर्डर','माझ्या ऑर्डर्स'],
    'Delivery address':['डिलीवरी का पता','डिलिव्हरीचा पत्ता'], 'Save details':['विवरण सहेजें','तपशील जतन करा'], 'Settings':['सेटिंग्स','सेटिंग्ज'], 'Dark mode':['डार्क मोड','डार्क मोड'], 'Offer notifications':['ऑफ़र की सूचनाएँ','ऑफर सूचना'], 'Diwali festive theme':['दिवाली थीम','दिवाळी थीम'],
    'Home':['होम','होम'], 'Search':['खोजें','शोधा'], 'Wishlist':['पसंदीदा','आवडते'], 'Cart':['कार्ट','कार्ट'], 'Account':['खाता','खाते'], 'Remove':['हटाएँ','काढा'], 'Save':['सहेजें','जतन करा'], 'Close':['बंद करें','बंद करा'],
    'Shop Location':['दुकान का रास्ता','दुकानचा पत्ता'], 'WhatsApp to Order':['WhatsApp पर ऑर्डर करें','WhatsApp वर ऑर्डर करा'], 'Install App':['ऐप इंस्टॉल करें','ॲप इन्स्टॉल करा'],
    'Price: ask on WhatsApp':['दाम WhatsApp पर पूछें','किंमत WhatsApp वर विचारा'], 'OUT OF STOCK':['स्टॉक ख़त्म','स्टॉक संपला'], 'IN STOCK':['स्टॉक में है','स्टॉक उपलब्ध'], 'Out of stock':['स्टॉक ख़त्म','स्टॉक संपला'],
    'Search shoes, sandals, brands…':['जूते, सैंडल, ब्रांड खोजें…','बूट, सँडल, ब्रँड शोधा…'], 'Search products':['उत्पाद खोजें','उत्पादने शोधा'], 'Share with a friend':['दोस्त को भेजें','मित्राला पाठवा']
  };
  var reverse = [{},{}]; Object.keys(labels).forEach(function (key) { labels[key].forEach(function (word, i) { reverse[i][word]=key; }); });
  var mode = localStorage.getItem('rbh-ui-lang') || 'en'; if (!/^(en|hi|mr)$/.test(mode)) mode='en';
  var skip = 'script,style,textarea,code,.card,.hcard,.relcard,.chip,.pdp-name,.pdp-price,.pdp-mrp,.pdp-colours,.pdp-sizes,.pdp-gallery,.lb,.grid,.hrow,.product-name,.brand,.price,.offer,.num';
  var queued = false;
  function translateText(node) {
    if (!node.parentElement || node.parentElement.closest(skip)) return;
    var raw=node.nodeValue, trimmed=raw.trim(); if (!trimmed || trimmed.length>150) return;
    var original=labels[trimmed] ? trimmed : (reverse[0][trimmed] || reverse[1][trimmed]);
    if (!original || !labels[original]) return;
    var next=mode==='en'?original:labels[original][mode==='hi'?0:1];
    if (trimmed!==next) node.nodeValue=raw.replace(trimmed,next);
  }
  function sweep() {
    queued=false;
    var root=document.body; if (!root) return;
    var walk=document.createTreeWalker(root,NodeFilter.SHOW_TEXT),n;
    while ((n=walk.nextNode())) translateText(n);
    document.querySelectorAll('input[placeholder]').forEach(function (el) {
      var v=el.placeholder, original=labels[v]?v:(reverse[0][v]||reverse[1][v]);
      if (original&&labels[original]) el.placeholder=mode==='en'?original:labels[original][mode==='hi'?0:1];
    });
    document.querySelectorAll('[aria-label]').forEach(function (el) {
      if (el.closest(skip)) return;
      var v=el.getAttribute('aria-label'),original=labels[v]?v:(reverse[0][v]||reverse[1][v]);
      if (original&&labels[original]) el.setAttribute('aria-label',mode==='en'?original:labels[original][mode==='hi'?0:1]);
    });
    document.documentElement.lang=mode;
  }
  function schedule(){if(!queued){queued=true;setTimeout(sweep,80);}}
  function change(){mode=this.value;localStorage.setItem('rbh-ui-lang',mode);sweep();}
  var box=document.createElement('label');box.id='rbh-lang-control';box.style.cssText='display:inline-flex;align-items:center;gap:5px;margin:6px 8px;color:#6e5315;font:600 13px system-ui,sans-serif';
  var text=document.createTextNode('🌐 ');box.appendChild(text);
  var select=document.createElement('select');select.setAttribute('aria-label','Site language');select.style.cssText='border:1px solid #ba9c55;border-radius:8px;padding:7px;background:#fff;color:#1c3150;font:600 13px system-ui,sans-serif;min-height:36px';
  [['en','English'],['hi','हिन्दी'],['mr','मराठी']].forEach(function(pair){var op=document.createElement('option');op.value=pair[0];op.textContent=pair[1];select.appendChild(op);});select.value=mode;select.addEventListener('change',change);box.appendChild(select);
  var mount=document.querySelector('.topbar')||document.querySelector('header')||document.body;
  mount.appendChild(box);
  new MutationObserver(schedule).observe(document.body,{subtree:true,childList:true,characterData:true});
  sweep();
})();
