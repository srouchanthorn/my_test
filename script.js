import { sleep } from 'k6';
import http from 'k6/http';
export let options = {
  duration: '1m',
  vus: 250,
  thresholds: {
    http_req_duration: ['p(95)<100'], // 95 percent of response times must be below 500ms
  },
};
 

export default function() {

	group("page_1 - https://github.com/k6io/awesome-k6", function() {
		let req, res;
		req = [{
			"method": "get",
			"url": "https://github.com/k6io/awesome-k6",
			"params": {
				"cookies": {
					"_octo": "GH1.1.1024515601.1602063890",
					"tz": "Asia%2FBangkok",
					"_device_id": "312a0a5f0079b8df2b28599999a0c520",
					"tz": "Asia%2FBangkok",
					"has_recent_activity": "1",
					"user_session": "QD7L4OeWJ2SPyy310no3JYbUTWbavC8vUgZ-w2M7ShvSjxxU",
					"__Host-user_session_same_site": "QD7L4OeWJ2SPyy310no3JYbUTWbavC8vUgZ-w2M7ShvSjxxU",
					"logged_in": "yes",
					"dotcom_user": "srouchanthorn",
					"_gh_sess": "dIE%2FJlEtjy2P9vFSKkTjpfaCJ6%2FqRqOnHkFr8ZM%2FLdqOrKmkgC7NwupUNHyYTkAUhv5x1cYWxHhlRcNPGewcM3vfDmvAI9KqhqDEBA5LHvHEo6Lj%2F0zlaNxiIut%2FvJZ23v0wDUg14bGA9S4MnHAmgfBGVSzHXIrVaTFFRksMIkcPmJa8cC5qlH8e9Fgq7FmzN%2FOlxs60l4wiWX0Aq0eFHahfc9%2B0Ar%2FM5tm8%2FeunKPocC8EzcNXCyz6ClljqZQEEh%2FcYGPrLA7%2BpTR2EePffH0qhENLQMSMDnTfqnmcaxZlZ1N9mqvfM5lpFNvQ%2BzVKYCqXCG%2FYc9gxRi3UjTXCCXenPbdyMkYrmU70pedDGhxAUUpVF6zx2Zm2GN5hBeVQoFN%2BKQC39QQMbyXCoQamOvWKX9S4vXUH9Y0GBuYD4h%2BajzsObP1DhKqANjw%2FcUo94EVaQ2k9zWEQRJV2B7MblVo8UH4MDcxyL%2FIcLWQA%2FFVGZ6MxXM%2Bjv6btA5aNWSmQWVhVtZcAdj58NLQWJn8oHB40rtTZwmNFO5271vmW8fcGHJrMDg694mN6YzY%2Bgwcew4scmyEC3GnWKxzj6Fa1Mo3go%2FJ2Q7yK%2BLMEokvEU7uY8kFyiuJXk3U9nC4X2EYhBxj6a7%2FUsdPoH3jABWqoRPD8tKy%2FVo4WSBbxBFbiJ062Hf76p6xF9X1hxbUr%2Fts0ZdIyvXkJm%2FLTS7367DqIKwHGOdKVfL3OjXAqBu3AihmmTk9%2B8JUNQBQrC0tDr4E%2BDc5JRs0fRzuP8mFFZRAy%2FsS79pIZFhtdy4JA%2Fd6HdLN6D%2BSnI5QnefPaQs1gIUsGC3Pqe3EJeed7fZUEDT%2BBINm%2Bek68CE4cSZdtT4aRXiVQGHr%2B3I8D9a%2FLd5pPZ5TIpiEZOhsaDEZ2Z2N3WXmQNWm9mPt%2Bz5DSLKqvNZnJMepw%3D--M61qs4eV53ETOPVr--vAGHxlL0aovxsFR8%2Ft99pQ%3D%3D"
				},
				"headers": {
					"cache-control": "max-age=0",
					"upgrade-insecure-requests": "1",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"sec-fetch-site": "none",
					"sec-fetch-mode": "navigate",
					"sec-fetch-user": "?1",
					"sec-fetch-dest": "document",
					"referer": "https://www.google.com/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9,km;q=0.8",
					"if-none-match": "W/\"8bbd5b760a16e73feaec7fcc4fd9efbc\""
				}
			}
		}];
		res = http.batch(req);
		sleep(1.24);
		req = [{
			"method": "get",
			"url": "https://github.githubassets.com/assets/chunk-frameworks-2e5392ca.js",
			"params": {
				"headers": {
					"Origin": "https://github.com",
					"Referer": "https://github.com/k6io/awesome-k6",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://github.githubassets.com/assets/chunk-vendor-1f4ae360.js",
			"params": {
				"headers": {
					"Origin": "https://github.com",
					"Referer": "https://github.com/k6io/awesome-k6",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://github.githubassets.com/assets/behaviors-04672cbf.js",
			"params": {
				"headers": {
					"Origin": "https://github.com",
					"Referer": "https://github.com/k6io/awesome-k6",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://github.githubassets.com/assets/environment-f0adafbf.js",
			"params": {
				"headers": {
					"Origin": "https://github.com",
					"Referer": "https://github.com/k6io/awesome-k6",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://github.githubassets.com/assets/frameworks-ac5ddc9cb244e4890a516164c39e1e9b.css",
			"params": {
				"headers": {
					"Origin": "https://github.com",
					"Referer": "https://github.com/k6io/awesome-k6",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://github.githubassets.com/assets/behaviors-41b2a01578fe268535d90b0c60b456a9.css",
			"params": {
				"headers": {
					"origin": "https://github.com",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "style",
					"referer": "https://github.com/k6io/awesome-k6",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9,km;q=0.8",
					"if-none-match": "\"fc3d50e47c9970cc29abf436f55bb6fd\""
				}
			}
		},{
			"method": "get",
			"url": "https://github.githubassets.com/assets/github-68aaa0aa0dce8e9fc0c92511b4ced42b.css",
			"params": {
				"headers": {
					"origin": "https://github.com",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "style",
					"referer": "https://github.com/k6io/awesome-k6",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9,km;q=0.8",
					"if-none-match": "\"a385bc72186f54e5b9eebb6998e06869\""
				}
			}
		},{
			"method": "get",
			"url": "https://github.githubassets.com/assets/codespaces-2216a892.js",
			"params": {
				"headers": {
					"Origin": "https://github.com",
					"Referer": "https://github.com/k6io/awesome-k6",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://github.githubassets.com/assets/repositories-5ee01395.js",
			"params": {
				"headers": {
					"Origin": "https://github.com",
					"Referer": "https://github.com/k6io/awesome-k6",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://github.githubassets.com/assets/topic-suggestions-6b0e6d72.js",
			"params": {
				"headers": {
					"Origin": "https://github.com",
					"Referer": "https://github.com/k6io/awesome-k6",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://github.githubassets.com/assets/optimizely-549aea48.js",
			"params": {
				"headers": {
					"Origin": "https://github.com",
					"Referer": "https://github.com/k6io/awesome-k6",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://github.githubassets.com/images/search-key-slash.svg",
			"params": {
				"headers": {
					"Referer": "https://github.com/k6io/awesome-k6",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://avatars.githubusercontent.com/u/12745432?s=40&v=4",
			"params": {
				"headers": {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
					"accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://github.com/k6io/awesome-k6",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9,km;q=0.8",
					"if-none-match": "\"6ef372c79813ac7ccae698febb7b0196de32af5e5a08068f1e3d87845399e34b\"",
					"if-modified-since": "Tue, 15 Feb 2011 02:30:35 GMT"
				}
			}
		},{
			"method": "get",
			"url": "https://avatars.githubusercontent.com/u/12745432?s=60&v=4",
			"params": {
				"headers": {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
					"accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://github.com/k6io/awesome-k6",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9,km;q=0.8",
					"if-none-match": "\"6ef372c79813ac7ccae698febb7b0196de32af5e5a08068f1e3d87845399e34b\"",
					"if-modified-since": "Sat, 12 Feb 2011 02:33:38 GMT"
				}
			}
		},{
			"method": "get",
			"url": "https://avatars.githubusercontent.com/u/1596025?s=60&u=4517ee7df7d24dfb56d11f2bb46c88662ddc5aeb&v=4",
			"params": {
				"headers": {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
					"accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://github.com/k6io/awesome-k6",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9,km;q=0.8",
					"if-none-match": "\"276651a281538c47e6ced64d3e3d228024dc2b8a8d75824acdaef809a3e0f037\"",
					"if-modified-since": "Thu, 19 Nov 2020 15:31:24 GMT"
				}
			}
		},{
			"method": "get",
			"url": "https://github.com/k6io/awesome-k6/raw/master/assets/bert.png",
			"params": {
				"cookies": {
					"_octo": "GH1.1.1024515601.1602063890",
					"tz": "Asia%2FBangkok",
					"_device_id": "312a0a5f0079b8df2b28599999a0c520",
					"tz": "Asia%2FBangkok",
					"has_recent_activity": "1",
					"user_session": "QD7L4OeWJ2SPyy310no3JYbUTWbavC8vUgZ-w2M7ShvSjxxU",
					"__Host-user_session_same_site": "QD7L4OeWJ2SPyy310no3JYbUTWbavC8vUgZ-w2M7ShvSjxxU",
					"logged_in": "yes",
					"dotcom_user": "srouchanthorn",
					"_gh_sess": "tmbcLUsBlVf8tQvOtVWwAuXvI3XgQftwEWGx9UAWQnge%2Bz12N5U4kTQcEGtxhzmajyBSyJNBO1hzjJpJohaK8eaDJWV%2B3ByqkeIewa2hi%2FlLrBII67HnMa1t2MsP2tg7u9nxbT7FPEbW1Y0cEn2h8LRfYqBLHcug8MOIa0vNuC12wpENnjKs0yIiTebs82hE0flBOsNV9iyupmEZgsy%2BoBds4ZpBNYQjgsNWzdUbsmucVw7bcR4SIAXtnONgWbdTqQzntSL2UU1iKCoWreYopLQFkTMAMJcl3qsFW%2BYzqIjM13xnNhuZrk%2FaR1LcCcTxtZM3moQQ02lcJck3kP9yczVhmgaSU3rll8HdK9MkO5GRBCmvU16bgAidnKHEdtBUoRJsK9%2BGpSmKkfD16mW5D8f0N3%2FKmKF8rvwpQoo7gXROx3VAIaZvScFblbQ6cIu8lXaaX63qRQsMHbwB6RXZFQ%2FGg8aH67l1QVV1efyfGxx6DhAw69QjEhcwkGR8rRpm1fgd9Om6b4Z%2FQ6aD5E9jDyyf20%2BzL3Ua6FGnWaPLsDvC1TS2IE1ANmJrnhzEcDYbaSquaDoE04rChQAyY7%2Bt0A1O862EogKazrRPa%2FcYN8%2BR72CCcvppFLo%2FdnjjibZxyMJgznLzo0kBkpe4cWL%2B0tq%2FtmHfkD5PKuNZ2BPun%2FVOkrwh9%2Fe32zN8MXSQN6ontlpzacO7p%2BMh4qYZzvqe2Z3rG0z5wAduFFoZU4l4nezsJMn%2B5YiKonkvfhuRVJow4XKVdPA%2FqiassyygOdf11z5J%2ByzRlO7arqg36FfJnMs4z8YnQH9wyYgmWU%2Bk4REfKXbogUTgafJvZW6oro5ttJ3p8hUrCNHZJ7cenMe9%2FF1%2FACcmK26xw%2FSUV25Ke2342gEXFyT%2Btr%2B8o%2BPdtWLyzfEEqpyJmr75AvH%2FKT7scU0%3D--%2FLB9CNRvyE6%2BYuAe--NOzLNcVt%2F4BkBYIEbM5n1w%3D%3D"
				},
				"headers": {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
					"accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://github.com/k6io/awesome-k6",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9,km;q=0.8"
				}
			}
		},{
			"method": "get",
			"url": "https://camo.githubusercontent.com/64f8905651212a80869afbecbf0a9c52a5d1e70beab750dea40a994fa9a9f3c6/68747470733a2f2f617765736f6d652e72652f62616467652e737667",
			"params": {
				"headers": {
					"Referer": "https://github.com/k6io/awesome-k6",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://avatars.githubusercontent.com/u/1596025?s=64&v=4",
			"params": {
				"headers": {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
					"accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://github.com/k6io/awesome-k6",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9,km;q=0.8",
					"if-none-match": "\"2448edbc3a1e3eab3b49d1d2d15370769df4c6041ffa8bde8fd06a1c987efc31\"",
					"if-modified-since": "Thu, 19 Nov 2020 15:31:24 GMT"
				}
			}
		},{
			"method": "get",
			"url": "https://avatars.githubusercontent.com/u/54546?s=64&v=4",
			"params": {
				"headers": {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
					"accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://github.com/k6io/awesome-k6",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9,km;q=0.8",
					"if-none-match": "\"3d11bf3d9fa55e9e10e2d51233e2f915018fff2859c484f4ccf80e43898e8fa0\"",
					"if-modified-since": "Sat, 05 Sep 2020 22:38:34 GMT"
				}
			}
		},{
			"method": "get",
			"url": "https://avatars.githubusercontent.com/u/1752374?s=64&v=4",
			"params": {
				"headers": {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
					"accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://github.com/k6io/awesome-k6",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9,km;q=0.8",
					"if-none-match": "\"2188421363ef02772a9c3fdbea34bc89c45ab2847e2f30c3b22ed0dd364526f7\"",
					"if-modified-since": "Wed, 26 Apr 2017 10:44:57 GMT"
				}
			}
		},{
			"method": "get",
			"url": "https://avatars.githubusercontent.com/u/825430?s=64&v=4",
			"params": {
				"headers": {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
					"accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://github.com/k6io/awesome-k6",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9,km;q=0.8",
					"if-modified-since": "Fri, 14 Feb 2020 10:03:35 GMT"
				}
			}
		},{
			"method": "get",
			"url": "https://avatars.githubusercontent.com/u/1009277?s=64&v=4",
			"params": {
				"headers": {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
					"accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://github.com/k6io/awesome-k6",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9,km;q=0.8",
					"if-none-match": "\"336fe4583702b736c37473e11744a308a3b5eea30b5e1f35319f42966c2f2e5f\"",
					"if-modified-since": "Thu, 09 Oct 2014 22:56:01 GMT"
				}
			}
		},{
			"method": "get",
			"url": "https://avatars.githubusercontent.com/u/1320389?s=64&v=4",
			"params": {
				"headers": {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
					"accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://github.com/k6io/awesome-k6",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9,km;q=0.8",
					"if-none-match": "\"1f8aed195874207a57e2a4c276e3ddd35452d08916ce92f6b7124d532d234da9\"",
					"if-modified-since": "Fri, 27 Jul 2018 07:29:05 GMT"
				}
			}
		},{
			"method": "get",
			"url": "https://avatars.githubusercontent.com/u/21249866?s=64&v=4",
			"params": {
				"headers": {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
					"accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://github.com/k6io/awesome-k6",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9,km;q=0.8",
					"if-none-match": "\"042a6c6c04a0c0acee80897708d2e0d95880b99786cce22c5ccb5fd806b40bca\"",
					"if-modified-since": "Wed, 17 Jan 2018 21:48:32 GMT"
				}
			}
		},{
			"method": "get",
			"url": "https://github.com/k6io/awesome-k6/security/overall-count",
			"params": {
				"cookies": {
					"_octo": "GH1.1.1024515601.1602063890",
					"tz": "Asia%2FBangkok",
					"_device_id": "312a0a5f0079b8df2b28599999a0c520",
					"tz": "Asia%2FBangkok",
					"has_recent_activity": "1",
					"user_session": "QD7L4OeWJ2SPyy310no3JYbUTWbavC8vUgZ-w2M7ShvSjxxU",
					"__Host-user_session_same_site": "QD7L4OeWJ2SPyy310no3JYbUTWbavC8vUgZ-w2M7ShvSjxxU",
					"logged_in": "yes",
					"dotcom_user": "srouchanthorn",
					"_gh_sess": "tmbcLUsBlVf8tQvOtVWwAuXvI3XgQftwEWGx9UAWQnge%2Bz12N5U4kTQcEGtxhzmajyBSyJNBO1hzjJpJohaK8eaDJWV%2B3ByqkeIewa2hi%2FlLrBII67HnMa1t2MsP2tg7u9nxbT7FPEbW1Y0cEn2h8LRfYqBLHcug8MOIa0vNuC12wpENnjKs0yIiTebs82hE0flBOsNV9iyupmEZgsy%2BoBds4ZpBNYQjgsNWzdUbsmucVw7bcR4SIAXtnONgWbdTqQzntSL2UU1iKCoWreYopLQFkTMAMJcl3qsFW%2BYzqIjM13xnNhuZrk%2FaR1LcCcTxtZM3moQQ02lcJck3kP9yczVhmgaSU3rll8HdK9MkO5GRBCmvU16bgAidnKHEdtBUoRJsK9%2BGpSmKkfD16mW5D8f0N3%2FKmKF8rvwpQoo7gXROx3VAIaZvScFblbQ6cIu8lXaaX63qRQsMHbwB6RXZFQ%2FGg8aH67l1QVV1efyfGxx6DhAw69QjEhcwkGR8rRpm1fgd9Om6b4Z%2FQ6aD5E9jDyyf20%2BzL3Ua6FGnWaPLsDvC1TS2IE1ANmJrnhzEcDYbaSquaDoE04rChQAyY7%2Bt0A1O862EogKazrRPa%2FcYN8%2BR72CCcvppFLo%2FdnjjibZxyMJgznLzo0kBkpe4cWL%2B0tq%2FtmHfkD5PKuNZ2BPun%2FVOkrwh9%2Fe32zN8MXSQN6ontlpzacO7p%2BMh4qYZzvqe2Z3rG0z5wAduFFoZU4l4nezsJMn%2B5YiKonkvfhuRVJow4XKVdPA%2FqiassyygOdf11z5J%2ByzRlO7arqg36FfJnMs4z8YnQH9wyYgmWU%2Bk4REfKXbogUTgafJvZW6oro5ttJ3p8hUrCNHZJ7cenMe9%2FF1%2FACcmK26xw%2FSUV25Ke2342gEXFyT%2Btr%2B8o%2BPdtWLyzfEEqpyJmr75AvH%2FKT7scU0%3D--%2FLB9CNRvyE6%2BYuAe--NOzLNcVt%2F4BkBYIEbM5n1w%3D%3D"
				},
				"headers": {
					"accept": "text/fragment+html",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
					"x-requested-with": "XMLHttpRequest",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://github.com/k6io/awesome-k6",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9,km;q=0.8"
				}
			}
		},{
			"method": "get",
			"url": "https://github.com/k6io/awesome-k6/show_partial?partial=tree%2Frecently_touched_branches_list",
			"params": {
				"cookies": {
					"_octo": "GH1.1.1024515601.1602063890",
					"tz": "Asia%2FBangkok",
					"_device_id": "312a0a5f0079b8df2b28599999a0c520",
					"tz": "Asia%2FBangkok",
					"has_recent_activity": "1",
					"user_session": "QD7L4OeWJ2SPyy310no3JYbUTWbavC8vUgZ-w2M7ShvSjxxU",
					"__Host-user_session_same_site": "QD7L4OeWJ2SPyy310no3JYbUTWbavC8vUgZ-w2M7ShvSjxxU",
					"logged_in": "yes",
					"dotcom_user": "srouchanthorn",
					"_gh_sess": "tmbcLUsBlVf8tQvOtVWwAuXvI3XgQftwEWGx9UAWQnge%2Bz12N5U4kTQcEGtxhzmajyBSyJNBO1hzjJpJohaK8eaDJWV%2B3ByqkeIewa2hi%2FlLrBII67HnMa1t2MsP2tg7u9nxbT7FPEbW1Y0cEn2h8LRfYqBLHcug8MOIa0vNuC12wpENnjKs0yIiTebs82hE0flBOsNV9iyupmEZgsy%2BoBds4ZpBNYQjgsNWzdUbsmucVw7bcR4SIAXtnONgWbdTqQzntSL2UU1iKCoWreYopLQFkTMAMJcl3qsFW%2BYzqIjM13xnNhuZrk%2FaR1LcCcTxtZM3moQQ02lcJck3kP9yczVhmgaSU3rll8HdK9MkO5GRBCmvU16bgAidnKHEdtBUoRJsK9%2BGpSmKkfD16mW5D8f0N3%2FKmKF8rvwpQoo7gXROx3VAIaZvScFblbQ6cIu8lXaaX63qRQsMHbwB6RXZFQ%2FGg8aH67l1QVV1efyfGxx6DhAw69QjEhcwkGR8rRpm1fgd9Om6b4Z%2FQ6aD5E9jDyyf20%2BzL3Ua6FGnWaPLsDvC1TS2IE1ANmJrnhzEcDYbaSquaDoE04rChQAyY7%2Bt0A1O862EogKazrRPa%2FcYN8%2BR72CCcvppFLo%2FdnjjibZxyMJgznLzo0kBkpe4cWL%2B0tq%2FtmHfkD5PKuNZ2BPun%2FVOkrwh9%2Fe32zN8MXSQN6ontlpzacO7p%2BMh4qYZzvqe2Z3rG0z5wAduFFoZU4l4nezsJMn%2B5YiKonkvfhuRVJow4XKVdPA%2FqiassyygOdf11z5J%2ByzRlO7arqg36FfJnMs4z8YnQH9wyYgmWU%2Bk4REfKXbogUTgafJvZW6oro5ttJ3p8hUrCNHZJ7cenMe9%2FF1%2FACcmK26xw%2FSUV25Ke2342gEXFyT%2Btr%2B8o%2BPdtWLyzfEEqpyJmr75AvH%2FKT7scU0%3D--%2FLB9CNRvyE6%2BYuAe--NOzLNcVt%2F4BkBYIEbM5n1w%3D%3D"
				},
				"headers": {
					"accept": "text/html",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
					"x-requested-with": "XMLHttpRequest",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://github.com/k6io/awesome-k6",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9,km;q=0.8"
				}
			}
		},{
			"method": "get",
			"url": "https://github.com/k6io/awesome-k6/commit/c97b059a10c8de5381d48562a7a8fe7190507663/rollup?direction=sw",
			"params": {
				"cookies": {
					"_octo": "GH1.1.1024515601.1602063890",
					"tz": "Asia%2FBangkok",
					"_device_id": "312a0a5f0079b8df2b28599999a0c520",
					"tz": "Asia%2FBangkok",
					"has_recent_activity": "1",
					"user_session": "QD7L4OeWJ2SPyy310no3JYbUTWbavC8vUgZ-w2M7ShvSjxxU",
					"__Host-user_session_same_site": "QD7L4OeWJ2SPyy310no3JYbUTWbavC8vUgZ-w2M7ShvSjxxU",
					"logged_in": "yes",
					"dotcom_user": "srouchanthorn",
					"_gh_sess": "tmbcLUsBlVf8tQvOtVWwAuXvI3XgQftwEWGx9UAWQnge%2Bz12N5U4kTQcEGtxhzmajyBSyJNBO1hzjJpJohaK8eaDJWV%2B3ByqkeIewa2hi%2FlLrBII67HnMa1t2MsP2tg7u9nxbT7FPEbW1Y0cEn2h8LRfYqBLHcug8MOIa0vNuC12wpENnjKs0yIiTebs82hE0flBOsNV9iyupmEZgsy%2BoBds4ZpBNYQjgsNWzdUbsmucVw7bcR4SIAXtnONgWbdTqQzntSL2UU1iKCoWreYopLQFkTMAMJcl3qsFW%2BYzqIjM13xnNhuZrk%2FaR1LcCcTxtZM3moQQ02lcJck3kP9yczVhmgaSU3rll8HdK9MkO5GRBCmvU16bgAidnKHEdtBUoRJsK9%2BGpSmKkfD16mW5D8f0N3%2FKmKF8rvwpQoo7gXROx3VAIaZvScFblbQ6cIu8lXaaX63qRQsMHbwB6RXZFQ%2FGg8aH67l1QVV1efyfGxx6DhAw69QjEhcwkGR8rRpm1fgd9Om6b4Z%2FQ6aD5E9jDyyf20%2BzL3Ua6FGnWaPLsDvC1TS2IE1ANmJrnhzEcDYbaSquaDoE04rChQAyY7%2Bt0A1O862EogKazrRPa%2FcYN8%2BR72CCcvppFLo%2FdnjjibZxyMJgznLzo0kBkpe4cWL%2B0tq%2FtmHfkD5PKuNZ2BPun%2FVOkrwh9%2Fe32zN8MXSQN6ontlpzacO7p%2BMh4qYZzvqe2Z3rG0z5wAduFFoZU4l4nezsJMn%2B5YiKonkvfhuRVJow4XKVdPA%2FqiassyygOdf11z5J%2ByzRlO7arqg36FfJnMs4z8YnQH9wyYgmWU%2Bk4REfKXbogUTgafJvZW6oro5ttJ3p8hUrCNHZJ7cenMe9%2FF1%2FACcmK26xw%2FSUV25Ke2342gEXFyT%2Btr%2B8o%2BPdtWLyzfEEqpyJmr75AvH%2FKT7scU0%3D--%2FLB9CNRvyE6%2BYuAe--NOzLNcVt%2F4BkBYIEbM5n1w%3D%3D"
				},
				"headers": {
					"accept": "text/fragment+html",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
					"x-requested-with": "XMLHttpRequest",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://github.com/k6io/awesome-k6",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9,km;q=0.8",
					"if-none-match": "W/\"5b050a9dfec6f52528dee9d4b26a5d11\""
				}
			}
		},{
			"method": "get",
			"url": "https://github.com/k6io/awesome-k6/file-list/master",
			"params": {
				"cookies": {
					"_octo": "GH1.1.1024515601.1602063890",
					"tz": "Asia%2FBangkok",
					"_device_id": "312a0a5f0079b8df2b28599999a0c520",
					"tz": "Asia%2FBangkok",
					"has_recent_activity": "1",
					"user_session": "QD7L4OeWJ2SPyy310no3JYbUTWbavC8vUgZ-w2M7ShvSjxxU",
					"__Host-user_session_same_site": "QD7L4OeWJ2SPyy310no3JYbUTWbavC8vUgZ-w2M7ShvSjxxU",
					"logged_in": "yes",
					"dotcom_user": "srouchanthorn",
					"_gh_sess": "tmbcLUsBlVf8tQvOtVWwAuXvI3XgQftwEWGx9UAWQnge%2Bz12N5U4kTQcEGtxhzmajyBSyJNBO1hzjJpJohaK8eaDJWV%2B3ByqkeIewa2hi%2FlLrBII67HnMa1t2MsP2tg7u9nxbT7FPEbW1Y0cEn2h8LRfYqBLHcug8MOIa0vNuC12wpENnjKs0yIiTebs82hE0flBOsNV9iyupmEZgsy%2BoBds4ZpBNYQjgsNWzdUbsmucVw7bcR4SIAXtnONgWbdTqQzntSL2UU1iKCoWreYopLQFkTMAMJcl3qsFW%2BYzqIjM13xnNhuZrk%2FaR1LcCcTxtZM3moQQ02lcJck3kP9yczVhmgaSU3rll8HdK9MkO5GRBCmvU16bgAidnKHEdtBUoRJsK9%2BGpSmKkfD16mW5D8f0N3%2FKmKF8rvwpQoo7gXROx3VAIaZvScFblbQ6cIu8lXaaX63qRQsMHbwB6RXZFQ%2FGg8aH67l1QVV1efyfGxx6DhAw69QjEhcwkGR8rRpm1fgd9Om6b4Z%2FQ6aD5E9jDyyf20%2BzL3Ua6FGnWaPLsDvC1TS2IE1ANmJrnhzEcDYbaSquaDoE04rChQAyY7%2Bt0A1O862EogKazrRPa%2FcYN8%2BR72CCcvppFLo%2FdnjjibZxyMJgznLzo0kBkpe4cWL%2B0tq%2FtmHfkD5PKuNZ2BPun%2FVOkrwh9%2Fe32zN8MXSQN6ontlpzacO7p%2BMh4qYZzvqe2Z3rG0z5wAduFFoZU4l4nezsJMn%2B5YiKonkvfhuRVJow4XKVdPA%2FqiassyygOdf11z5J%2ByzRlO7arqg36FfJnMs4z8YnQH9wyYgmWU%2Bk4REfKXbogUTgafJvZW6oro5ttJ3p8hUrCNHZJ7cenMe9%2FF1%2FACcmK26xw%2FSUV25Ke2342gEXFyT%2Btr%2B8o%2BPdtWLyzfEEqpyJmr75AvH%2FKT7scU0%3D--%2FLB9CNRvyE6%2BYuAe--NOzLNcVt%2F4BkBYIEbM5n1w%3D%3D"
				},
				"headers": {
					"accept": "text/html",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
					"x-requested-with": "XMLHttpRequest",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://github.com/k6io/awesome-k6",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9,km;q=0.8"
				}
			}
		},{
			"method": "get",
			"url": "https://github.com/k6io/awesome-k6/used_by_list",
			"params": {
				"cookies": {
					"_octo": "GH1.1.1024515601.1602063890",
					"tz": "Asia%2FBangkok",
					"_device_id": "312a0a5f0079b8df2b28599999a0c520",
					"tz": "Asia%2FBangkok",
					"has_recent_activity": "1",
					"user_session": "QD7L4OeWJ2SPyy310no3JYbUTWbavC8vUgZ-w2M7ShvSjxxU",
					"__Host-user_session_same_site": "QD7L4OeWJ2SPyy310no3JYbUTWbavC8vUgZ-w2M7ShvSjxxU",
					"logged_in": "yes",
					"dotcom_user": "srouchanthorn",
					"_gh_sess": "tmbcLUsBlVf8tQvOtVWwAuXvI3XgQftwEWGx9UAWQnge%2Bz12N5U4kTQcEGtxhzmajyBSyJNBO1hzjJpJohaK8eaDJWV%2B3ByqkeIewa2hi%2FlLrBII67HnMa1t2MsP2tg7u9nxbT7FPEbW1Y0cEn2h8LRfYqBLHcug8MOIa0vNuC12wpENnjKs0yIiTebs82hE0flBOsNV9iyupmEZgsy%2BoBds4ZpBNYQjgsNWzdUbsmucVw7bcR4SIAXtnONgWbdTqQzntSL2UU1iKCoWreYopLQFkTMAMJcl3qsFW%2BYzqIjM13xnNhuZrk%2FaR1LcCcTxtZM3moQQ02lcJck3kP9yczVhmgaSU3rll8HdK9MkO5GRBCmvU16bgAidnKHEdtBUoRJsK9%2BGpSmKkfD16mW5D8f0N3%2FKmKF8rvwpQoo7gXROx3VAIaZvScFblbQ6cIu8lXaaX63qRQsMHbwB6RXZFQ%2FGg8aH67l1QVV1efyfGxx6DhAw69QjEhcwkGR8rRpm1fgd9Om6b4Z%2FQ6aD5E9jDyyf20%2BzL3Ua6FGnWaPLsDvC1TS2IE1ANmJrnhzEcDYbaSquaDoE04rChQAyY7%2Bt0A1O862EogKazrRPa%2FcYN8%2BR72CCcvppFLo%2FdnjjibZxyMJgznLzo0kBkpe4cWL%2B0tq%2FtmHfkD5PKuNZ2BPun%2FVOkrwh9%2Fe32zN8MXSQN6ontlpzacO7p%2BMh4qYZzvqe2Z3rG0z5wAduFFoZU4l4nezsJMn%2B5YiKonkvfhuRVJow4XKVdPA%2FqiassyygOdf11z5J%2ByzRlO7arqg36FfJnMs4z8YnQH9wyYgmWU%2Bk4REfKXbogUTgafJvZW6oro5ttJ3p8hUrCNHZJ7cenMe9%2FF1%2FACcmK26xw%2FSUV25Ke2342gEXFyT%2Btr%2B8o%2BPdtWLyzfEEqpyJmr75AvH%2FKT7scU0%3D--%2FLB9CNRvyE6%2BYuAe--NOzLNcVt%2F4BkBYIEbM5n1w%3D%3D"
				},
				"headers": {
					"accept": "text/fragment+html",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
					"x-requested-with": "XMLHttpRequest",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://github.com/k6io/awesome-k6",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9,km;q=0.8",
					"if-none-match": "W/\"75a11da44c802486bc6f65640aa48a73\""
				}
			}
		},{
			"method": "get",
			"url": "https://github.githubassets.com/assets/chunk-edit-57879965.js",
			"params": {
				"headers": {
					"Origin": "https://github.com",
					"Referer": "https://github.com/k6io/awesome-k6",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://github.com/users/srouchanthorn/feature_preview/indicator_check",
			"params": {
				"headers": {
					"Accept": "application/json",
					"Referer": "https://github.com/k6io/awesome-k6",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://raw.githubusercontent.com/k6io/awesome-k6/master/assets/bert.png",
			"params": {
				"headers": {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
					"accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://github.com/k6io/awesome-k6",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9,km;q=0.8",
					"if-none-match": "W/\"f40b336ab07d1bc7e11f38f9a4eabedb86bbba6be9bb5540008e219555a53b1b\""
				}
			}
		},{
			"method": "get",
			"url": "https://collector.githubapp.com/github/page_view?dimensions[page]=https%3A%2F%2Fgithub.com%2Fk6io%2Fawesome-k6&dimensions[title]=k6io%2Fawesome-k6%3A%20A%20curated%20list%20of%20resources%20on%20automated%20load-%20and%20performance%20testing%20using%20k6%20%F0%9F%97%BB&dimensions[referrer]=https%3A%2F%2Fwww.google.com%2F&dimensions[user_agent]=Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F88.0.4324.150%20Safari%2F537.36&dimensions[screen_resolution]=1366x768&dimensions[pixel_ratio]=1&dimensions[browser_resolution]=1366x150&dimensions[tz_seconds]=25200&dimensions[timestamp]=1613145103581&dimensions[referrer]=https%3A%2F%2Fwww.google.com%2F&dimensions[request_id]=9134%3A4204%3A1EC282%3A24A5D0%3A6026A40D&dimensions[visitor_id]=4400261002138848786&dimensions[region_edge]=ap-southeast-1&dimensions[region_render]=iad&dimensions[user_id]=55304510&dimensions[user_login]=k6io&dimensions[repository_id]=236692087&dimensions[repository_nwo]=k6io%2Fawesome-k6&dimensions[repository_public]=true&dimensions[repository_is_fork]=false&dimensions[repository_network_root_id]=236692087&dimensions[repository_network_root_nwo]=k6io%2Fawesome-k6&&measures[performance_timing]=1-339-218-2172-1425-1425-1353-1240-218-9-2--2172-0---340-1344-1218-247-1236-1236&&dimensions[actor_id]=12745432&dimensions[actor_login]=srouchanthorn&dimensions[actor_hash]=156476aadfbd1713bed7e4899d422c997d44e2521c909673aefeba91452ebe4c&dimensions[cid]=1024515601.1602063890",
			"params": {
				"headers": {
					"Host": "collector.githubapp.com",
					"Connection": "keep-alive",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
					"Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"Sec-Fetch-Site": "cross-site",
					"Sec-Fetch-Mode": "no-cors",
					"Sec-Fetch-Dest": "image",
					"Referer": "https://github.com/k6io/awesome-k6",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-US,en;q=0.9,km;q=0.8"
				}
			}
		},{
			"method": "get",
			"url": "https://github.com/manifest.json",
			"params": {
				"headers": {
					"Referer": "https://github.com/k6io/awesome-k6",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://github.githubassets.com/favicons/favicon.svg",
			"params": {
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
					"accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://github.com/k6io/awesome-k6",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9,km;q=0.8"
				}
			}
		},{
			"method": "post",
			"url": "https://api.github.com/_private/browser/stats",
			"body": "{\"stats\":[{\"webVitalTimings\":[{\"name\":\"https://github.com/k6io/awesome-k6\",\"fcp\":1658.4800001000986}],\"timestamp\":1613145103088,\"loggedIn\":true},{\"webVitalTimings\":[{\"name\":\"https://github.com/k6io/awesome-k6\",\"ttfb\":1217.7450000308454}],\"timestamp\":1613145103591,\"loggedIn\":true},{\"resourceTimings\":[{\"name\":\"https://github.githubassets.com/assets/chunk-frameworks-2e5392ca.js\",\"entryType\":\"resource\",\"startTime\":1242.6599999889731,\"duration\":13.38500005658716,\"initiatorType\":\"link\",\"nextHopProtocol\":\"h2\",\"workerStart\":0,\"redirectStart\":0,\"redirectEnd\":0,\"fetchStart\":1242.6599999889731,\"domainLookupStart\":0,\"domainLookupEnd\":0,\"connectStart\":0,\"connectEnd\":0,\"secureConnectionStart\":0,\"requestStart\":0,\"responseStart\":0,\"responseEnd\":1256.0450000455603,\"transferSize\":0,\"encodedBodySize\":0,\"decodedBodySize\":0,\"serverTiming\":[],\"workerTiming\":[]},{\"name\":\"https://github.githubassets.com/assets/chunk-vendor-1f4ae360.js\",\"entryType\":\"resource\",\"startTime\":1243.0000000167638,\"duration\":14.290000079199672,\"initiatorType\":\"link\",\"nextHopProtocol\":\"h2\",\"workerStart\":0,\"redirectStart\":0,\"redirectEnd\":0,\"fetchStart\":1243.0000000167638,\"domainLookupStart\":0,\"domainLookupEnd\":0,\"connectStart\":0,\"connectEnd\":0,\"secureConnectionStart\":0,\"requestStart\":0,\"responseStart\":0,\"responseEnd\":1257.2900000959635,\"transferSize\":0,\"encodedBodySize\":0,\"decodedBodySize\":0,\"serverTiming\":[],\"workerTiming\":[]},{\"name\":\"https://github.githubassets.com/assets/behaviors-04672cbf.js\",\"entryType\":\"resource\",\"startTime\":1243.2300000218675,\"duration\":15.22499998100102,\"initiatorType\":\"link\",\"nextHopProtocol\":\"h2\",\"workerStart\":0,\"redirectStart\":0,\"redirectEnd\":0,\"fetchStart\":1243.2300000218675,\"domainLookupStart\":0,\"domainLookupEnd\":0,\"connectStart\":0,\"connectEnd\":0,\"secureConnectionStart\":0,\"requestStart\":0,\"responseStart\":0,\"responseEnd\":1258.4550000028685,\"transferSize\":0,\"encodedBodySize\":0,\"decodedBodySize\":0,\"serverTiming\":[],\"workerTiming\":[]},{\"name\":\"https://github.githubassets.com/assets/environment-f0adafbf.js\",\"entryType\":\"resource\",\"startTime\":1243.4150000335649,\"duration\":13.174999970942736,\"initiatorType\":\"link\",\"nextHopProtocol\":\"h2\",\"workerStart\":0,\"redirectStart\":0,\"redirectEnd\":0,\"fetchStart\":1243.4150000335649,\"domainLookupStart\":0,\"domainLookupEnd\":0,\"connectStart\":0,\"connectEnd\":0,\"secureConnectionStart\":0,\"requestStart\":0,\"responseStart\":0,\"responseEnd\":1256.5900000045076,\"transferSize\":0,\"encodedBodySize\":0,\"decodedBodySize\":0,\"serverTiming\":[],\"workerTiming\":[]},{\"name\":\"https://github.githubassets.com/assets/frameworks-ac5ddc9cb244e4890a516164c39e1e9b.css\",\"entryType\":\"resource\",\"startTime\":1250.4050000570714,\"duration\":9.004999999888241,\"initiatorType\":\"link\",\"nextHopProtocol\":\"h2\",\"workerStart\":0,\"redirectStart\":0,\"redirectEnd\":0,\"fetchStart\":1250.4050000570714,\"domainLookupStart\":0,\"domainLookupEnd\":0,\"connectStart\":0,\"connectEnd\":0,\"secureConnectionStart\":0,\"requestStart\":0,\"responseStart\":0,\"responseEnd\":1259.4100000569597,\"transferSize\":0,\"encodedBodySize\":0,\"decodedBodySize\":0,\"serverTiming\":[],\"workerTiming\":[]},{\"name\":\"https://github.githubassets.com/assets/behaviors-41b2a01578fe268535d90b0c60b456a9.css\",\"entryType\":\"resource\",\"startTime\":1250.745000084862,\"duration\":340.52999992854893,\"initiatorType\":\"link\",\"nextHopProtocol\":\"h2\",\"workerStart\":0,\"redirectStart\":0,\"redirectEnd\":0,\"fetchStart\":1250.745000084862,\"domainLookupStart\":0,\"domainLookupEnd\":0,\"connectStart\":0,\"connectEnd\":0,\"secureConnectionStart\":0,\"requestStart\":0,\"responseStart\":0,\"responseEnd\":1591.275000013411,\"transferSize\":0,\"encodedBodySize\":0,\"decodedBodySize\":0,\"serverTiming\":[],\"workerTiming\":[]},{\"name\":\"https://github.githubassets.com/assets/github-68aaa0aa0dce8e9fc0c92511b4ced42b.css\",\"entryType\":\"resource\",\"startTime\":1251.105000032112,\"duration\":340.0400000391528,\"initiatorType\":\"link\",\"nextHopProtocol\":\"h2\",\"workerStart\":0,\"redirectStart\":0,\"redirectEnd\":0,\"fetchStart\":1251.105000032112,\"domainLookupStart\":0,\"domainLookupEnd\":0,\"connectStart\":0,\"connectEnd\":0,\"secureConnectionStart\":0,\"requestStart\":0,\"responseStart\":0,\"responseEnd\":1591.1450000712648,\"transferSize\":0,\"encodedBodySize\":0,\"decodedBodySize\":0,\"serverTiming\":[],\"workerTiming\":[]},{\"name\":\"https://github.githubassets.com/assets/codespaces-2216a892.js\",\"entryType\":\"resource\",\"startTime\":1251.8700000364333,\"duration\":68.73499997891486,\"initiatorType\":\"script\",\"nextHopProtocol\":\"h2\",\"workerStart\":0,\"redirectStart\":0,\"redirectEnd\":0,\"fetchStart\":1251.8700000364333,\"domainLookupStart\":0,\"domainLookupEnd\":0,\"connectStart\":0,\"connectEnd\":0,\"secureConnectionStart\":0,\"requestStart\":0,\"responseStart\":0,\"responseEnd\":1320.6050000153482,\"transferSize\":0,\"encodedBodySize\":0,\"decodedBodySize\":0,\"serverTiming\":[],\"workerTiming\":[]},{\"name\":\"https://github.githubassets.com/assets/repositories-5ee01395.js\",\"entryType\":\"resource\",\"startTime\":1251.975000021048,\"duration\":69.0399999730289,\"initiatorType\":\"script\",\"nextHopProtocol\":\"h2\",\"workerStart\":0,\"redirectStart\":0,\"redirectEnd\":0,\"fetchStart\":1251.975000021048,\"domainLookupStart\":0,\"domainLookupEnd\":0,\"connectStart\":0,\"connectEnd\":0,\"secureConnectionStart\":0,\"requestStart\":0,\"responseStart\":0,\"responseEnd\":1321.0149999940768,\"transferSize\":0,\"encodedBodySize\":0,\"decodedBodySize\":0,\"serverTiming\":[],\"workerTiming\":[]},{\"name\":\"https://github.githubassets.com/assets/topic-suggestions-6b0e6d72.js\",\"entryType\":\"resource\",\"startTime\":1252.0500000100583,\"duration\":69.11500007845461,\"initiatorType\":\"script\",\"nextHopProtocol\":\"h2\",\"workerStart\":0,\"redirectStart\":0,\"redirectEnd\":0,\"fetchStart\":1252.0500000100583,\"domainLookupStart\":0,\"domainLookupEnd\":0,\"connectStart\":0,\"connectEnd\":0,\"secureConnectionStart\":0,\"requestStart\":0,\"responseStart\":0,\"responseEnd\":1321.165000088513,\"transferSize\":0,\"encodedBodySize\":0,\"decodedBodySize\":0,\"serverTiming\":[],\"workerTiming\":[]},{\"name\":\"https://github.githubassets.com/assets/optimizely-549aea48.js\",\"entryType\":\"resource\",\"startTime\":1311.4000000059605,\"duration\":10.740000056102872,\"initiatorType\":\"script\",\"nextHopProtocol\":\"h2\",\"workerStart\":0,\"redirectStart\":0,\"redirectEnd\":0,\"fetchStart\":1311.4000000059605,\"domainLookupStart\":0,\"domainLookupEnd\":0,\"connectStart\":0,\"connectEnd\":0,\"secureConnectionStart\":0,\"requestStart\":0,\"responseStart\":0,\"responseEnd\":1322.1400000620633,\"transferSize\":0,\"encodedBodySize\":0,\"decodedBodySize\":0,\"serverTiming\":[],\"workerTiming\":[]},{\"name\":\"https://github.githubassets.com/images/search-key-slash.svg\",\"entryType\":\"resource\",\"startTime\":1311.9850000366569,\"duration\":9.889999986626208,\"initiatorType\":\"img\",\"nextHopProtocol\":\"h2\",\"workerStart\":0,\"redirectStart\":0,\"redirectEnd\":0,\"fetchStart\":1311.9850000366569,\"domainLookupStart\":0,\"domainLookupEnd\":0,\"connectStart\":0,\"connectEnd\":0,\"secureConnectionStart\":0,\"requestStart\":0,\"responseStart\":0,\"responseEnd\":1321.875000023283,\"transferSize\":0,\"encodedBodySize\":0,\"decodedBodySize\":0,\"serverTiming\":[],\"workerTiming\":[]},{\"name\":\"https://avatars.githubusercontent.com/u/12745432?s=40&v=4\",\"entryType\":\"resource\",\"startTime\":1312.0650000637397,\"duration\":67.88999994751066,\"initiatorType\":\"img\",\"nextHopProtocol\":\"h2\",\"workerStart\":0,\"redirectStart\":0,\"redirectEnd\":0,\"fetchStart\":1312.0650000637397,\"domainLookupStart\":1312.0650000637397,\"domainLookupEnd\":1312.0650000637397,\"connectStart\":1312.0650000637397,\"connectEnd\":1312.0650000637397,\"secureConnectionStart\":1312.0650000637397,\"requestStart\":1318.6050000367686,\"responseStart\":1378.2850001007318,\"responseEnd\":1379.9550000112504,\"transferSize\":202,\"encodedBodySize\":1575,\"decodedBodySize\":1575,\"serverTiming\":[],\"workerTiming\":[]},{\"name\":\"https://avatars.githubusercontent.com/u/12745432?s=60&v=4\",\"entryType\":\"resource\",\"startTime\":1312.210000003688,\"duration\":70.63500001095235,\"initiatorType\":\"img\",\"nextHopProtocol\":\"h2\",\"workerStart\":0,\"redirectStart\":0,\"redirectEnd\":0,\"fetchStart\":1312.210000003688,\"domainLookupStart\":1312.210000003688,\"domainLookupEnd\":1312.210000003688,\"connectStart\":1312.210000003688,\"connectEnd\":1312.210000003688,\"secureConnectionStart\":1312.210000003688,\"requestStart\":1318.6500000301749,\"responseStart\":1380.8200000785291,\"responseEnd\":1382.8450000146404,\"transferSize\":85,\"encodedBodySize\":1575,\"decodedBodySize\":1575,\"serverTiming\":[],\"workerTiming\":[]},{\"name\":\"https://avatars.githubusercontent.com/u/1596025?s=60&u=4517ee7df7d24dfb56d11f2bb46c88662ddc5aeb&v=4\",\"entryType\":\"resource\",\"startTime\":1344.7900000028312,\"duration\":91.40500007197261,\"initiatorType\":\"img\",\"nextHopProtocol\":\"h2\",\"workerStart\":0,\"redirectStart\":0,\"redirectEnd\":0,\"fetchStart\":1344.7900000028312,\"domainLookupStart\":1344.7900000028312,\"domainLookupEnd\":1344.7900000028312,\"connectStart\":1344.7900000028312,\"connectEnd\":1344.7900000028312,\"secureConnectionStart\":1344.7900000028312,\"requestStart\":1348.5450000735,\"responseStart\":1433.9600000530481,\"responseEnd\":1436.1950000748038,\"transferSize\":164,\"encodedBodySize\":1333,\"decodedBodySize\":1333,\"serverTiming\":[],\"workerTiming\":[]},{\"name\":\"https://camo.githubusercontent.com/64f8905651212a80869afbecbf0a9c52a5d1e70beab750dea40a994fa9a9f3c6/68747470733a2f2f617765736f6d652e72652f62616467652e737667\",\"entryType\":\"resource\",\"startTime\":1345.545000047423,\"duration\":12.469999957829714,\"initiatorType\":\"img\",\"nextHopProtocol\":\"h2\",\"workerStart\":0,\"redirectStart\":0,\"redirectEnd\":0,\"fetchStart\":1345.545000047423,\"domainLookupStart\":1345.545000047423,\"domainLookupEnd\":1345.545000047423,\"connectStart\":1345.545000047423,\"connectEnd\":1345.545000047423,\"secureConnectionStart\":1345.545000047423,\"requestStart\":1349.2950000800192,\"responseStart\":1350.2800000132993,\"responseEnd\":1358.0150000052527,\"transferSize\":0,\"encodedBodySize\":5829,\"decodedBodySize\":5829,\"serverTiming\":[],\"workerTiming\":[]},{\"name\":\"https://avatars.githubusercontent.com/u/1596025?s=64&v=4\",\"entryType\":\"resource\",\"startTime\":1345.9300000686198,\"duration\":92.20499999355525,\"initiatorType\":\"img\",\"nextHopProtocol\":\"h2\",\"workerStart\":0,\"redirectStart\":0,\"redirectEnd\":0,\"fetchStart\":1345.9300000686198,\"domainLookupStart\":1345.9300000686198,\"domainLookupEnd\":1345.9300000686198,\"connectStart\":1345.9300000686198,\"connectEnd\":1345.9300000686198,\"secureConnectionStart\":1345.9300000686198,\"requestStart\":1359.1050000395626,\"responseStart\":1434.5900000771508,\"responseEnd\":1438.135000062175,\"transferSize\":163,\"encodedBodySize\":1370,\"decodedBodySize\":1370,\"serverTiming\":[],\"workerTiming\":[]},{\"name\":\"https://avatars.githubusercontent.com/u/1752374?s=64&v=4\",\"entryType\":\"resource\",\"startTime\":1346.1050000041723,\"duration\":91.58000000752509,\"initiatorType\":\"img\",\"nextHopProtocol\":\"h2\",\"workerStart\":0,\"redirectStart\":0,\"redirectEnd\":0,\"fetchStart\":1346.1050000041723,\"domainLookupStart\":1346.1050000041723,\"domainLookupEnd\":1346.1050000041723,\"connectStart\":1346.1050000041723,\"connectEnd\":1346.1050000041723,\"secureConnectionStart\":1346.1050000041723,\"requestStart\":1359.6050000051036,\"responseStart\":1434.2900000046939,\"responseEnd\":1437.6850000116974,\"transferSize\":141,\"encodedBodySize\":1734,\"decodedBodySize\":1734,\"serverTiming\":[],\"workerTiming\":[]},{\"name\":\"https://avatars.githubusercontent.com/u/54546?s=64&v=4\",\"entryType\":\"resource\",\"startTime\":1346.3000000920147,\"duration\":91.23999997973442,\"initiatorType\":\"img\",\"nextHopProtocol\":\"h2\",\"workerStart\":0,\"redirectStart\":0,\"redirectEnd\":0,\"fetchStart\":1346.3000000920147,\"domainLookupStart\":1346.3000000920147,\"domainLookupEnd\":1346.3000000920147,\"connectStart\":1346.3000000920147,\"connectEnd\":1346.3000000920147,\"secureConnectionStart\":1346.3000000920147,\"requestStart\":1359.675000072457,\"responseStart\":1434.2100000940263,\"responseEnd\":1437.540000071749,\"transferSize\":140,\"encodedBodySize\":1971,\"decodedBodySize\":1971,\"serverTiming\":[],\"workerTiming\":[]},{\"name\":\"https://avatars.githubusercontent.com/u/825430?s=64&v=4\",\"entryType\":\"resource\",\"startTime\":1346.5450000949204,\"duration\":91.24999993946403,\"initiatorType\":\"img\",\"nextHopProtocol\":\"h2\",\"workerStart\":0,\"redirectStart\":0,\"redirectEnd\":0,\"fetchStart\":1346.5450000949204,\"domainLookupStart\":1346.5450000949204,\"domainLookupEnd\":1346.5450000949204,\"connectStart\":1346.5450000949204,\"connectEnd\":1346.5450000949204,\"secureConnectionStart\":1346.5450000949204,\"requestStart\":1359.7249999875203,\"responseStart\":1434.3600000720471,\"responseEnd\":1437.7950000343844,\"transferSize\":125,\"encodedBodySize\":7052,\"decodedBodySize\":7052,\"serverTiming\":[],\"workerTiming\":[]},{\"name\":\"https://avatars.githubusercontent.com/u/1009277?s=64&v=4\",\"entryType\":\"resource\",\"startTime\":1346.7850000597537,\"duration\":91.12500003539026,\"initiatorType\":\"img\",\"nextHopProtocol\":\"h2\",\"workerStart\":0,\"redirectStart\":0,\"redirectEnd\":0,\"fetchStart\":1346.7850000597537,\"domainLookupStart\":1346.7850000597537,\"domainLookupEnd\":1346.7850000597537,\"connectStart\":1346.7850000597537,\"connectEnd\":1346.7850000597537,\"secureConnectionStart\":1346.7850000597537,\"requestStart\":1359.775000018999,\"responseStart\":1434.430000022985,\"responseEnd\":1437.910000095144,\"transferSize\":202,\"encodedBodySize\":957,\"decodedBodySize\":957,\"serverTiming\":[],\"workerTiming\":[]},{\"name\":\"https://avatars.githubusercontent.com/u/1320389?s=64&v=4\",\"entryType\":\"resource\",\"startTime\":1346.9899999909103,\"duration\":89.4450000487268,\"initiatorType\":\"img\",\"nextHopProtocol\":\"h2\",\"workerStart\":0,\"redirectStart\":0,\"redirectEnd\":0,\"fetchStart\":1346.9899999909103,\"domainLookupStart\":1346.9899999909103,\"domainLookupEnd\":1346.9899999909103,\"connectStart\":1346.9899999909103,\"connectEnd\":1346.9899999909103,\"secureConnectionStart\":1346.9899999909103,\"requestStart\":1359.8200000124052,\"responseStart\":1434.125000028871,\"responseEnd\":1436.435000039637,\"transferSize\":141,\"encodedBodySize\":8776,\"decodedBodySize\":8776,\"serverTiming\":[],\"workerTiming\":[]},{\"name\":\"https://avatars.githubusercontent.com/u/21249866?s=64&v=4\",\"entryType\":\"resource\",\"startTime\":1347.1900000004098,\"duration\":90.83000000100583,\"initiatorType\":\"img\",\"nextHopProtocol\":\"h2\",\"workerStart\":0,\"redirectStart\":0,\"redirectEnd\":0,\"fetchStart\":1347.1900000004098,\"domainLookupStart\":1347.1900000004098,\"domainLookupEnd\":1347.1900000004098,\"connectStart\":1347.1900000004098,\"connectEnd\":1347.1900000004098,\"secureConnectionStart\":1347.1900000004098,\"requestStart\":1360.9000000869855,\"responseStart\":1434.5150000881404,\"responseEnd\":1438.0200000014156,\"transferSize\":139,\"encodedBodySize\":1764,\"decodedBodySize\":1764,\"serverTiming\":[],\"workerTiming\":[]},{\"name\":\"https://github.com/k6io/awesome-k6/security/overall-count\",\"entryType\":\"resource\",\"startTime\":1380.8399999979883,\"duration\":428.64500009454787,\"initiatorType\":\"fetch\",\"nextHopProtocol\":\"h2\",\"workerStart\":0,\"redirectStart\":0,\"redirectEnd\":0,\"fetchStart\":1380.8399999979883,\"domainLookupStart\":1380.8399999979883,\"domainLookupEnd\":1380.8399999979883,\"connectStart\":1380.8399999979883,\"connectEnd\":1380.8399999979883,\"secureConnectionStart\":1380.8399999979883,\"requestStart\":1384.7650000825524,\"responseStart\":1805.9249999932945,\"responseEnd\":1809.4850000925362,\"transferSize\":3983,\"encodedBodySize\":20,\"decodedBodySize\":0,\"serverTiming\":[],\"workerTiming\":[]},{\"name\":\"https://github.com/k6io/awesome-k6/show_partial?partial=tree%2Frecently_touched_branches_list\",\"entryType\":\"resource\",\"startTime\":1381.4349999884143,\"duration\":477.5650000665337,\"initiatorType\":\"fetch\",\"nextHopProtocol\":\"h2\",\"workerStart\":0,\"redirectStart\":0,\"redirectEnd\":0,\"fetchStart\":1381.4349999884143,\"domainLookupStart\":1381.4349999884143,\"domainLookupEnd\":1381.4349999884143,\"connectStart\":1381.4349999884143,\"connectEnd\":1381.4349999884143,\"secureConnectionStart\":1381.4349999884143,\"requestStart\":1386.445000069216,\"responseStart\":1856.2500000698492,\"responseEnd\":1859.000000054948,\"transferSize\":4034,\"encodedBodySize\":20,\"decodedBodySize\":0,\"serverTiming\":[],\"workerTiming\":[]},{\"name\":\"https://github.com/k6io/awesome-k6/commit/c97b059a10c8de5381d48562a7a8fe7190507663/rollup?direction=sw\",\"entryType\":\"resource\",\"startTime\":1382.3450000490993,\"duration\":426.6549999592826,\"initiatorType\":\"fetch\",\"nextHopProtocol\":\"h2\",\"workerStart\":0,\"redirectStart\":0,\"redirectEnd\":0,\"fetchStart\":1382.3450000490993,\"domainLookupStart\":1382.3450000490993,\"domainLookupEnd\":1382.3450000490993,\"connectStart\":1382.3450000490993,\"connectEnd\":1382.3450000490993,\"secureConnectionStart\":1382.3450000490993,\"requestStart\":1386.5350000560284,\"responseStart\":1806.2900000950322,\"responseEnd\":1809.000000008382,\"transferSize\":3941,\"encodedBodySize\":1062,\"decodedBodySize\":2001,\"serverTiming\":[],\"workerTiming\":[]},{\"name\":\"https://github.com/k6io/awesome-k6/file-list/master\",\"entryType\":\"resource\",\"startTime\":1383.0550001002848,\"duration\":452.7049999451265,\"initiatorType\":\"fetch\",\"nextHopProtocol\":\"h2\",\"workerStart\":0,\"redirectStart\":0,\"redirectEnd\":0,\"fetchStart\":1383.0550001002848,\"domainLookupStart\":1383.0550001002848,\"domainLookupEnd\":1383.0550001002848,\"connectStart\":1383.0550001002848,\"connectEnd\":1383.0550001002848,\"secureConnectionStart\":1383.0550001002848,\"requestStart\":1387.1050000889227,\"responseStart\":1810.605000006035,\"responseEnd\":1835.7600000454113,\"transferSize\":6222,\"encodedBodySize\":2145,\"decodedBodySize\":13712,\"serverTiming\":[],\"workerTiming\":[]},{\"name\":\"https://github.com/k6io/awesome-k6/used_by_list\",\"entryType\":\"resource\",\"startTime\":1383.6900000460446,\"duration\":471.16499999538064,\"initiatorType\":\"fetch\",\"nextHopProtocol\":\"h2\",\"workerStart\":0,\"redirectStart\":0,\"redirectEnd\":0,\"fetchStart\":1383.6900000460446,\"domainLookupStart\":1383.6900000460446,\"domainLookupEnd\":1383.6900000460446,\"connectStart\":1383.6900000460446,\"connectEnd\":1383.6900000460446,\"secureConnectionStart\":1383.6900000460446,\"requestStart\":1387.8250000998378,\"responseStart\":1843.9350000116974,\"responseEnd\":1854.8550000414252,\"transferSize\":3965,\"encodedBodySize\":22,\"decodedBodySize\":2,\"serverTiming\":[],\"workerTiming\":[]},{\"name\":\"https://github.githubassets.com/assets/chunk-edit-57879965.js\",\"entryType\":\"resource\",\"startTime\":1404.1549999965355,\"duration\":3.4600000362843275,\"initiatorType\":\"script\",\"nextHopProtocol\":\"h2\",\"workerStart\":0,\"redirectStart\":0,\"redirectEnd\":0,\"fetchStart\":1404.1549999965355,\"domainLookupStart\":0,\"domainLookupEnd\":0,\"connectStart\":0,\"connectEnd\":0,\"secureConnectionStart\":0,\"requestStart\":0,\"responseStart\":0,\"responseEnd\":1407.6150000328198,\"transferSize\":0,\"encodedBodySize\":0,\"decodedBodySize\":0,\"serverTiming\":[],\"workerTiming\":[]},{\"name\":\"https://github.com/users/srouchanthorn/feature_preview/indicator_check\",\"entryType\":\"resource\",\"startTime\":1505.1049999892712,\"duration\":3.4050000831484795,\"initiatorType\":\"fetch\",\"nextHopProtocol\":\"h2\",\"workerStart\":0,\"redirectStart\":0,\"redirectEnd\":0,\"fetchStart\":1505.1049999892712,\"domainLookupStart\":1505.1049999892712,\"domainLookupEnd\":1505.1049999892712,\"connectStart\":1505.1049999892712,\"connectEnd\":1505.1049999892712,\"secureConnectionStart\":1505.1049999892712,\"requestStart\":1506.78500009235,\"responseStart\":1507.080000010319,\"responseEnd\":1508.5100000724196,\"transferSize\":0,\"encodedBodySize\":44,\"decodedBodySize\":24,\"serverTiming\":[],\"workerTiming\":[]},{\"name\":\"https://github.com/k6io/awesome-k6/raw/master/assets/bert.png\",\"entryType\":\"resource\",\"startTime\":1751.2600000482053,\"duration\":415.7950000371784,\"initiatorType\":\"img\",\"nextHopProtocol\":\"h2\",\"workerStart\":0,\"redirectStart\":0,\"redirectEnd\":0,\"fetchStart\":1751.2600000482053,\"domainLookupStart\":0,\"domainLookupEnd\":0,\"connectStart\":0,\"connectEnd\":0,\"secureConnectionStart\":0,\"requestStart\":0,\"responseStart\":0,\"responseEnd\":2167.0550000853837,\"transferSize\":0,\"encodedBodySize\":0,\"decodedBodySize\":0,\"serverTiming\":[],\"workerTiming\":[]}],\"timestamp\":1613145103601,\"loggedIn\":true},{\"navigationTimings\":[{\"name\":\"https://github.com/k6io/awesome-k6\",\"entryType\":\"navigation\",\"startTime\":0,\"duration\":2185.1950000273064,\"initiatorType\":\"navigation\",\"nextHopProtocol\":\"h2\",\"workerStart\":0,\"redirectStart\":0,\"redirectEnd\":0,\"fetchStart\":2.0050000166520476,\"domainLookupStart\":8.585000061430037,\"domainLookupEnd\":217.44500007480383,\"connectStart\":217.44500007480383,\"connectEnd\":339.20500008389354,\"secureConnectionStart\":246.61999999079853,\"requestStart\":339.5200000377372,\"responseStart\":1217.7450000308454,\"responseEnd\":1344.2350000841543,\"transferSize\":42758,\"encodedBodySize\":38718,\"decodedBodySize\":178915,\"serverTiming\":[],\"workerTiming\":[],\"unloadEventStart\":1235.975000075996,\"unloadEventEnd\":1236.0549999866635,\"domInteractive\":1353.2250000862405,\"domContentLoadedEventStart\":1424.7300000861287,\"domContentLoadedEventEnd\":1424.7350000077859,\"domComplete\":2171.570000005886,\"loadEventStart\":2171.760000055656,\"loadEventEnd\":2185.1950000273064,\"type\":\"reload\",\"redirectCount\":0}],\"timestamp\":1613145103601,\"loggedIn\":true}]}",
			"params": {
				"cookies": {
					"_octo": "GH1.1.1024515601.1602063890",
					"tz": "Asia%2FBangkok",
					"logged_in": "yes",
					"dotcom_user": "srouchanthorn"
				},
				"headers": {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
					"content-type": "text/plain;charset=UTF-8",
					"accept": "*/*",
					"origin": "https://github.com",
					"sec-fetch-site": "same-site",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "empty",
					"referer": "https://github.com/k6io/awesome-k6",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9,km;q=0.8"
				}
			}
		},{
			"method": "get",
			"url": "https://github.githubassets.com/favicons/favicon.png",
			"params": {
				"headers": {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
					"accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://github.com/k6io/awesome-k6",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9,km;q=0.8"
				}
			}
		}];
		res = http.batch(req);
		// Random sleep between 20s and 40s
		sleep(Math.floor(Math.random()*20+20));
	});

}
