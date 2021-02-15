import { sleep } from 'k6';
import http from 'k6/http';
export let options = {
 stages: [
    { duration: '5m', target: 100 }, // simulate ramp-up of traffic from 1 to 100 users over 5 minutes.
    { duration: '10m', target: 100 }, // stay at 100 users for 10 minutes
    { duration: '5m', target: 0 }, // ramp-down to 0 users
  ],
  thresholds: {
    'http_req_duration{kind:html}': ["avg<=10"],
		'http_req_duration{kind:img}': ["avg<=100"],
		'http_reqs': ["rate>100"],
  },
};
 

export default function() {

 
	
	group("front page", function() {
		check(http.get("https://cambodia.tax.gov.kh:9009/reg/rt/", {
			tags: {'kind': 'html' },
		}), {
			"status is 200": (res) => res.status === 200,
		});
	});
	group("image", function() {
		check(http.get("https://cambodia.tax.gov.kh:9009", {
			tags: {'kind': 'img' },
		}), {
			"status is 200": (res) => res.status === 200,
		});
	});
     
}
