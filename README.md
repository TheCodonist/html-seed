# html-seed
A simple HTML Quick-Start with bootstrap and jQuery.
# Seo Best Practices
>> Title Tag
* Less Than 512px (50 - 70 characters)
* Important keywords near the beginning
* Each title should be unique

>> Meta Description Tag
* Best under 155 characters
* Each description should be unique
* Well written descriptions influence click-through rate

>> Image
* use alt, width and height attributes

>> Hyperlinks
* for images links, the alt attribute serves as anchor text
* user rel="nofollow" for paid links and untrusted content
* Preference: HTML links over javascript

>> Canonicalization URL Best Practices
* Preferred URL = https://example.com/

>> SEO Tips for URLs
* Choose shorter, human-readable URLs with descriptive keywords
* Exclude dynamic parameters when possible (see Canonicalization and Pagination)
* When possible, place content on the same subdomain to preserve authority
* Recommended: https://example.com/blog
* Less Ideal: https://blog.example.com

>> Robots Exclusion Standard
* Only Meta Robots and X-Robots remove URLs from search results
* Don't block CSS or JavaScript files with robots.txt

>> Mobile Web Development
* Place the meta viewport tag in the <head> of the document
* Uses CSS to alter the rendering of the page on the device using media queries

>> Serves different HTML and CSS on the same URL, varied by user agent
HTTP/1.1 200 OK
Content-Type: text/html
Vary: User-Agent
Content-Length: 3495

>> Identify mobile and desktop versions using rel="alternate" and rel="canonical"
* Desktop page: http://example.com/ <link rel="alternate" media="only screen and (max width: 640px)" href="https://m.example.com/"/>
* Mobile page: http://m.example.com/ <link rel="canonical" href="https://example.com/"/>

