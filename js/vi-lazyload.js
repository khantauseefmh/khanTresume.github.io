/*!
* Vimeo LazyLoad
* v2.1.0
* https://github.com/the-muda-organization/vimeo-lazyload
* MIT License
*/(function(){var vimeo=document.querySelectorAll('.vi-lazyload'),vimeo_observer,template_wrap,template_content,template_playbtn,template_logo,template_iframe,settings_observer_rootMargin='200px 0px',settings_thumb_base_url='https://raw.githubusercontent.com/the-muda-organization/vimeo-lazyload/master/demo-img/',settings_thumb_extension='webp';if(vimeo.length>0){template_wrap=document.createElement('div');template_content=document.createElement('div');template_playbtn=document.createElement('div');template_logo=document.createElement('a');template_iframe=document.createElement('iframe');template_wrap.classList.add('vi-lazyload-wrap');template_content.classList.add('vi-lazyload-content');template_playbtn.classList.add('vi-lazyload-playbtn');template_logo.classList.add('vi-lazyload-logo');template_logo.target='_blank';template_logo.rel='noreferrer';template_iframe.setAttribute('allow','autoplay;fullscreen;picture-in-picture');template_iframe.setAttribute('allowfullscreen','');vimeo_observer=new IntersectionObserver(function(elements){elements.forEach(function(e){var this_element=e.target,this_wrap,this_content,this_playbtn,this_logo,this_iframe,this_data_id=e.target.dataset.id,this_data_thumb=e.target.dataset.thumb,this_data_logo=e.target.dataset.logo;if(e.isIntersecting===true){this_wrap=template_wrap.cloneNode();this_element.append(this_wrap);this_content=template_content.cloneNode();this_wrap.append(this_content);this_content.style.setProperty('--vi-lazyload-img','url("'+this_data_thumb+'")');this_playbtn=template_playbtn.cloneNode();this_content.append(this_playbtn);if(this_data_logo!=='0'){this_logo=template_logo.cloneNode();this_logo.href='https://vimeo.com/'+this_data_id;this_content.append(this_logo);}
this_playbtn.addEventListener('click',function(){this_iframe=template_iframe.cloneNode();this_iframe.src='https://player.vimeo.com/video/'+this_data_id+'&autoplay=1&autopause=0&title=0&pip=1&responsive=1&speed=1';this_content.append(this_iframe);});vimeo_observer.unobserve(this_element);}});},{rootMargin:settings_observer_rootMargin,});vimeo.forEach(function(e){vimeo_observer.observe(e);});}})();