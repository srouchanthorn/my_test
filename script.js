import { sleep } from 'k6';
import http from 'k6/http';
export let options = {
 stages: [
    { duration: '5m', target: 100 }, // simulate ramp-up of traffic from 1 to 100 users over 5 minutes.
    { duration: '10m', target: 100 }, // stay at 100 users for 10 minutes
    { duration: '5m', target: 0 }, // ramp-down to 0 users
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95 percent of response times must be below 500ms
  },
};
 

export default function() {

	 http.get('https://cambodia.tax.gov.kh:9009/reg/rt/index.php'); 
    sleep(3); 

}
