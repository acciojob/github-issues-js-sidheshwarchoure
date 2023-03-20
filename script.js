//your code here
const issuesList = document.getElementById('issues-list');
const pageHeading = document.getElementById('page-heading');
let currentPageNumber = 1;

function getIssues() {
  fetch(`https://api.github.com/repositories/1296269/issues?page=${currentPageNumber}&per_page=5`)
    .then(response => response.json())
    .then(issues => {
      issuesList.innerHTML = '';
      issues.forEach(issue => {
        const issueItem = document.createElement('li');
        issueItem.textContent = issue.title;
        issuesList.appendChild(issueItem);
      });
    });
}

getIssues();

document.getElementById('load_next').addEventListener('click', () => {
  currentPageNumber++;
  pageHeading.textContent = `Page number ${currentPageNumber}`;
  getIssues();
});

document.getElementById('load_prev').addEventListener('click', () => {
  if (currentPageNumber > 1) {
    currentPageNumber--;
    pageHeading.textContent = `Page number ${currentPageNumber}`;
    getIssues();
  }
});
					
		