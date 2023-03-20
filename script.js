//your code here
let currentPage = 1;
		const apiUrl = `https://api.github.com/repositories/1296269/issues?page=${currentPage}&per_page=5`;
		const issueList = document.getElementById('issue-list');
		const loadPrevButton = document.getElementById('load_prev');
		const loadNextButton = document.getElementById('load_next');
		const pageHeader = document.querySelector('h1');
		
		function loadIssues() {
			fetch(apiUrl)
				.then(response => response.json())
				.then(issues => {
					// Clear the previous issue list
					issueList.innerHTML = '';
					// Display each issue title in an ordered list
					issues.forEach(issue => {
						const li = document.createElement('li');
						li.textContent = issue.title;
						issueList.appendChild(li);
					});
				})
				.catch(error => console.log(error));
		}
		
		// Load issues for the first time
		loadIssues();
		
		// Load the next page of issues
		loadNextButton.addEventListener('click', () => {
			currentPage++;
			apiUrl = `https://api.github.com/repositories/1296269/issues?page=${currentPage}&per_page=5`;
			pageHeader.textContent = `Page number ${currentPage}`;
			loadIssues();
		});
		
		// Load the previous page of issues
		loadPrevButton.addEventListener('click', () => {
			if (currentPage > 1) {
				currentPage--;
				apiUrl = `https://api.github.com/repositories/1296269/issues?page=${currentPage}&per_page=5`;
				pageHeader.textContent = `Page number ${currentPage}`;
				loadIssues();
			}
		});