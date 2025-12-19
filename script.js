// Centralized SVG Icon Library
    const Icons = {
      save: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>',
      plus: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>',
      close: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
      download: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4"></path><polyline points="17 9 12 14 7 9"></polyline><line x1="12" y1="2" x2="12" y2="14"></line></svg>',
      folder: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>',
      folderOpen: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>',
      trash: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>',
      book: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>',
      file: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>',
      warning: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
      chart: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>',
      sheet: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>',
      mapPin: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
      info: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>',
      error: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>'
    };

    // Initialize icons in static HTML elements
    function initIcons() {
      const chooseLabel = document.getElementById('chooseFilesLabel');
      if (chooseLabel) {
        chooseLabel.querySelector('.icon-placeholder').innerHTML = Icons.folder;
      }

      const viewBtn = document.getElementById('viewFilesBtn');
      if (viewBtn) {
        const placeholder = viewBtn.querySelector('.icon-placeholder');
        if (placeholder) placeholder.innerHTML = Icons.folderOpen;
      }

      document.querySelectorAll('.icon-placeholder[data-icon]').forEach(el => {
        const iconName = el.getAttribute('data-icon');
        if (Icons[iconName]) {
          el.innerHTML = Icons[iconName];
        }
      });
    }

    let searchResults = [];
    let selectedFiles = [];
    let searchTextsGlobal = [];
    let savedSearches = [];

    function openFilesModal() {
      const modal = document.getElementById('filesModal');
      renderModalFileList();
      modal.classList.add('show');
    }

    function closeFilesModal() {
      const modal = document.getElementById('filesModal');
      modal.classList.remove('show');
    }

    function renderModalFileList() {
      const container = document.getElementById('modalFileList');
      if (selectedFiles.length === 0) {
        container.innerHTML = '<div style="text-align:center; color:#999; padding:20px;">No files selected</div>';
        return;
      }

      container.innerHTML = '';
      selectedFiles.forEach((file, index) => {
        const item = document.createElement('div');
        item.className = 'file-list-item';
        item.innerHTML = `
          <span>${file.name} <span style="color:#666;">(${(file.size / 1024).toFixed(1)} KB)</span></span>
          <button class="file-remove-btn" onclick="removeFile(${index})">Remove</button>
        `;
        container.appendChild(item);
      });
    }

    function loadSavedSearches() {
      try {
        const saved = localStorage.getItem('savedSearchTexts');
        if (saved) {
          savedSearches = JSON.parse(saved);
          renderSavedSearches();
        }
      } catch (e) {
        console.error('Error loading saved searches:', e);
      }
    }

    function saveSavedSearches() {
      localStorage.setItem('savedSearchTexts', JSON.stringify(savedSearches));
    }

    function renderSavedSearches() {
      const container = document.getElementById('savedSearchesList');
      if (savedSearches.length === 0) {
        container.innerHTML = '<div style="text-align:center; color:#999; font-size:0.85rem; padding:20px;">No saved searches yet</div>';
        return;
      }

      container.innerHTML = '';
      savedSearches.forEach((text, index) => {
        const item = document.createElement('div');
        item.className = 'saved-search-item';
        item.innerHTML = `
          <div class="saved-search-text" title="${text}">${text}</div>
          <div class="saved-search-buttons">
            <button class="icon-btn use" onclick="useSavedSearch(${index})" title="Use this search text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"/></svg></button>
            <button class="icon-btn delete" onclick="deleteSavedSearch(${index})" title="Delete"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
          </div>
        `;
        container.appendChild(item);
      });
    }

    function saveCurrentSearch(btn) {
      const container = btn.closest('.search-text-container');
      const textarea = container.querySelector('.searchText');
      const text = textarea.value.trim();

      if (!text) {
        alert('Please enter some text before saving.');
        return;
      }

      if (savedSearches.includes(text)) {
        alert('This search text is already saved.');
        return;
      }

      savedSearches.push(text);
      saveSavedSearches();
      renderSavedSearches();

      btn.style.color = '#28a745';
      setTimeout(() => {
        btn.style.color = '#ffc107';
      }, 500);
    }

    function useSavedSearch(index) {
      const text = savedSearches[index];
      const allContainers = document.querySelectorAll('.search-text-container');
      const lastContainer = allContainers[allContainers.length - 1];
      const lastTextarea = lastContainer.querySelector('.searchText');

      if (!lastTextarea.value.trim()) {
        lastTextarea.value = text;
      } else {
        addSearchText();
        setTimeout(() => {
          const newContainers = document.querySelectorAll('.search-text-container');
          const newLast = newContainers[newContainers.length - 1];
          const newTextarea = newLast.querySelector('.searchText');
          newTextarea.value = text;
          saveSearchTexts();
        }, 0);
      }
      saveSearchTexts();
    }

    function deleteSavedSearch(index) {
      if (confirm('Delete this saved search text?')) {
        savedSearches.splice(index, 1);
        saveSavedSearches();
        renderSavedSearches();
      }
    }

    function addSearchText() {
      const allContainers = document.querySelectorAll('.search-text-container');
      const lastContainer = allContainers[allContainers.length - 1];
      const lastTextarea = lastContainer.querySelector('.searchText');

      if (!lastTextarea.value.trim()) {
        alert('Please fill in the current search text before adding a new one.');
        lastTextarea.focus();
        return;
      }

      const container = document.getElementById('searchTextContainer');

      allContainers.forEach(cont => {
        const addBtn = cont.querySelector('.add-btn');
        if (addBtn) {
          addBtn.remove();
        }
      });

      const newSearchText = document.createElement('div');
      newSearchText.className = 'search-text-container';
      newSearchText.innerHTML = `
        <div class="textarea-wrapper">
          <textarea class="searchText" placeholder="Enter text to search..."></textarea>
          <button type="button" class="save-icon-btn" onclick="saveCurrentSearch(this)" title="Save this search text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg></button>
        </div>
        <div class="search-buttons">
          <button type="button" class="remove-btn" onclick="removeSearchText(this)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg></button>
          <button type="button" class="add-btn" onclick="addSearchText()"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></button>
        </div>
      `;
      container.appendChild(newSearchText);

      const newTextarea = newSearchText.querySelector('.searchText');
      newTextarea.focus();

      saveSearchTexts();
    }

    function removeSearchText(btn) {
      const container = document.getElementById('searchTextContainer');
      const block = btn.closest('.search-text-container');
      if (!block) return;

      const allContainers = container.querySelectorAll('.search-text-container');

      if (allContainers.length === 1) {
        return;
      }

      const isLast = block === allContainers[allContainers.length - 1];
      container.removeChild(block);

      if (isLast) {
        const newLast = container.querySelector('.search-text-container:last-child');
        if (newLast && !newLast.querySelector('.add-btn')) {
          const buttonsDiv = newLast.querySelector('.search-buttons');
          const addBtn = document.createElement('button');
          addBtn.type = 'button';
          addBtn.className = 'add-btn';
          addBtn.onclick = addSearchText;
          addBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>';
          buttonsDiv.appendChild(addBtn);
        }
      }

      saveSearchTexts();
    }

    function resetAll() {
      document.getElementById('fileInput').value = '';
      document.getElementById('results').innerHTML = '';
      document.getElementById('total').innerHTML = '';
      document.getElementById('total').style.display = 'none';
      document.getElementById('viewFilesBtn').style.display = 'none';
      document.getElementById('showOnlyNonZero').checked = true;
      document.getElementById('showDetails').checked = false;
      document.getElementById('caseSensitive').checked = false;
      document.getElementById('exportBtn').style.display = 'none';
      document.getElementById('infoNote').style.display = 'none';
      searchResults = [];
      selectedFiles = [];
      searchTextsGlobal = [];

      const container = document.getElementById('searchTextContainer');
      container.innerHTML = `
        <div class="search-text-container">
          <div class="textarea-wrapper">
            <textarea class="searchText" placeholder="Enter text to search..."></textarea>
            <button type="button" class="save-icon-btn" onclick="saveCurrentSearch(this)" title="Save this search text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg></button>
          </div>
          <div class="search-buttons">
            <button type="button" class="add-btn" onclick="addSearchText()"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></button>
          </div>
        </div>
      `;
      saveSearchTexts();
    }

    function displayFileInfo() {
      const fileInput = document.getElementById('fileInput');
      selectedFiles = Array.from(fileInput.files);

      const viewFilesBtn = document.getElementById('viewFilesBtn');
      const fileCount = document.getElementById('fileCount');

      if (selectedFiles.length === 0) {
        viewFilesBtn.style.display = 'none';
        fileCount.textContent = '0';
        return;
      }

      viewFilesBtn.style.display = 'block';
      fileCount.textContent = selectedFiles.length;
    }

    function removeFile(index) {
      selectedFiles.splice(index, 1);
      const dt = new DataTransfer();
      selectedFiles.forEach(file => dt.items.add(file));
      document.getElementById('fileInput').files = dt.files;
      displayFileInfo();
      renderModalFileList();
    }

    function saveSearchTexts() {
      const texts = Array.from(document.querySelectorAll('.searchText')).map(t => t.value);
      localStorage.setItem('excelSearchTexts', JSON.stringify(texts));
    }

    function loadSearchTexts() {
      try {
        const saved = localStorage.getItem('excelSearchTexts');
        if (saved) {
          const texts = JSON.parse(saved);
          const container = document.getElementById('searchTextContainer');
          container.innerHTML = '';
          texts.forEach((text, index) => {
            const div = document.createElement('div');
            div.className = 'search-text-container';
            const isLast = index === texts.length - 1;
            const hasRemove = index > 0;
            div.innerHTML = `
              <div class="textarea-wrapper">
                <textarea class="searchText" placeholder="Enter text to search...">${text}</textarea>
                <button type="button" class="save-icon-btn" onclick="saveCurrentSearch(this)" title="Save this search text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg></button>
              </div>
              <div class="search-buttons">
                ${hasRemove ? '<button type="button" class="remove-btn" onclick="removeSearchText(this)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg></button>' : ''}
                ${isLast ? '<button type="button" class="add-btn" onclick="addSearchText()"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></button>' : ''}
              </div>
            `;
            container.appendChild(div);
          });
        }
      } catch (e) {
        console.error('Error loading saved search texts:', e);
      }
    }

    function search() {
      // Remove last input if empty
      const allContainers = document.querySelectorAll('.search-text-container');
      if (allContainers.length > 1) {
        const lastContainer = allContainers[allContainers.length - 1];
        const lastTextarea = lastContainer.querySelector('.searchText');
        if (!lastTextarea.value.trim()) {
          lastContainer.remove();

          // Add + button back to new last item
          const newLast = document.querySelector('.search-text-container:last-child');
          if (newLast && !newLast.querySelector('.add-btn')) {
            const buttonsDiv = newLast.querySelector('.search-buttons');
            const addBtn = document.createElement('button');
            addBtn.type = 'button';
            addBtn.className = 'add-btn';
            addBtn.onclick = addSearchText;
            addBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`;
            buttonsDiv.appendChild(addBtn);
          }
        }
      }

      if (selectedFiles.length === 0) {
        alert('Please select at least one Excel file.');
        return;
      }

      const searchTexts = Array.from(document.querySelectorAll('.searchText'))
        .map(t => t.value.trim())
        .filter(v => v.length > 0);

      if (searchTexts.length === 0) {
        alert('Please enter at least one search text.');
        return;
      }

      searchTextsGlobal = searchTexts;

      const loadingOverlay = document.getElementById('loadingOverlay');
      const totalDiv = document.getElementById('total');
      const resultsDiv = document.getElementById('results');

      loadingOverlay.classList.add('show');
      totalDiv.innerHTML = '';
      totalDiv.style.display = 'none';
      resultsDiv.innerHTML = '';
      searchResults = [];

      const caseSensitive = document.getElementById('caseSensitive').checked;

      const totals = {};
      searchTexts.forEach(text => { totals[text] = 0; });

      let filesProcessed = 0;

      selectedFiles.forEach(file => {
        const reader = new FileReader();
        reader.onload = function(e) {
          try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });

            const occurrences = {};
            const occurrenceDetails = {};
            const sheetDifferences = [];

            searchTexts.forEach(text => {
              occurrences[text] = 0;
              occurrenceDetails[text] = [];
            });

            workbook.SheetNames.forEach(sheetName => {
              const worksheet = workbook.Sheets[sheetName];
              const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

              const sheetOccurrences = {};
              searchTexts.forEach(text => { sheetOccurrences[text] = 0; });

              json.forEach((row, rowIndex) => {
                row.forEach((cell, colIndex) => {
                  searchTexts.forEach(searchText => {
                    const flags = caseSensitive ? 'g' : 'gi';
                    const regex = new RegExp(`\\b${escapeRegex(searchText)}\\b`, flags);
                    if (cell && cell.toString().match(regex)) {
                      const matches = cell.toString().match(regex);
                      sheetOccurrences[searchText] += matches.length;

                      const colLetter = XLSX.utils.encode_col(colIndex);
                      const cellRef = colLetter + (rowIndex + 1);

                      occurrenceDetails[searchText].push({
                        sheet: sheetName,
                        cell: cellRef,
                        row: rowIndex + 1,
                        col: colLetter,
                        value: cell.toString(),
                        term: searchText
                      });
                    }
                  });
                });
              });

              const counts = Object.values(sheetOccurrences);
              const countsMatch = counts.length > 0 && counts.every((val, _, arr) => val === arr[0]);

              if (!countsMatch && counts.some(c => c > 0)) {
                sheetDifferences.push({
                  sheetName: sheetName,
                  occurrences: { ...sheetOccurrences }
                });
              }

              searchTexts.forEach(text => {
                occurrences[text] += sheetOccurrences[text];
              });
            });

            searchTexts.forEach(text => {
              totals[text] += occurrences[text];
            });

            searchResults.push({
              fileName: file.name,
              occurrences: { ...occurrences },
              details: occurrenceDetails,
              sheetDifferences: sheetDifferences
            });
          } catch (err) {
            searchResults.push({
              fileName: file.name,
              error: err.message
            });
          }

          filesProcessed++;
          if (filesProcessed === selectedFiles.length) {
            loadingOverlay.classList.remove('show');
            document.getElementById('exportBtn').style.display = 'inline-block';
            renderTotals(totals);
            renderView();
          }
        };
        reader.readAsArrayBuffer(file);
      });

      saveSearchTexts();
    }

    function renderTotals(totals) {
      const totalDiv = document.getElementById('total');
      const counts = Object.values(totals);
      if (!counts.length) {
        totalDiv.style.display = 'none';
        return;
      }
      const maxCount = Math.max(...counts);

      const totalsHtml = Object.entries(totals).map(([text, count]) => {
        const isLesser = count < maxCount;
        return `<p style="margin:4px 0;" class="${isLesser ? 'error' : ''}">${text}: <strong>${count}</strong></p>`;
      }).join('');

      totalDiv.innerHTML = `
        <p style="margin:4px 0;"><strong>${Icons.chart} Overall Totals (All Files)</strong></p>
        ${totalsHtml}
      `;
      totalDiv.style.display = 'block';
    }

    function renderView() {
      const resultsDiv = document.getElementById('results');
      const showOnlyNonZero = document.getElementById('showOnlyNonZero').checked;
      const showDetails = document.getElementById('showDetails').checked;
      const infoNote = document.getElementById('infoNote');

      resultsDiv.innerHTML = '';
      let hasDifferences = false;

      if (!searchResults.length) return;

      searchResults.forEach(result => {
        if (result.error) {
          resultsDiv.innerHTML += `
            <h3 class="error">${Icons.error} Error processing file: ${result.fileName}</h3>
            <p class="error">${result.error}</p>
          `;
          return;
        }

        const occurrences = result.occurrences;
        const occurrenceDetails = result.details;
        const sheetDifferences = result.sheetDifferences || [];

        const fileCounts = Object.values(occurrences);
        const maxFileCount = fileCounts.length ? Math.max(...fileCounts) : 0;
        const anyNonZero = fileCounts.some(c => c > 0);
        const fileCountsMatch = fileCounts.length > 0 && fileCounts.every((val, _, arr) => val === arr[0]);

        if (showOnlyNonZero && !anyNonZero) {
          return;
        }

        let sheetDiffHtml = '';
        if (sheetDifferences.length > 0) {
          hasDifferences = true;
          sheetDiffHtml = '<div class="warning">';
          sheetDiffHtml += '<strong>${Icons.warning} Differences found in sheets:</strong><br>';
          sheetDifferences.forEach(diff => {
            const occStr = Object.entries(diff.occurrences)
              .map(([text, count]) => `${text}: ${count}`)
              .join(', ');
            sheetDiffHtml += `${Icons.sheet} <strong>${diff.sheetName}</strong> (${occStr})<br>`;
          });
          sheetDiffHtml += '</div>';
        }

        const rowsHtml = Object.entries(occurrences)
          .filter(([_, count]) => !showOnlyNonZero || count > 0)
          .map(([text, count]) => {
            const isLesser = count < maxFileCount;
            return `
              <tr class="${isLesser ? 'error' : ''}">
                <td>${text}</td>
                <td>${count}</td>
              </tr>
            `;
          }).join('');

        let detailsHtml = '';
        if (showDetails && anyNonZero) {
          detailsHtml = '<div class="occurrence-details"><strong>Occurrence Details:</strong>';
          Object.entries(occurrenceDetails).forEach(([text, details]) => {
            if (!details.length) return;
            detailsHtml += `<div><em>${text}</em></div>`;
            details.forEach(detail => {
              const highlightedValue = detail.value.replace(
                new RegExp(`\\b${escapeRegex(detail.term)}\\b`, 'gi'),
                match => `<span class="match-highlight">${match}</span>`
              );
              detailsHtml += `
                <div class="occurrence-item">
                  ${Icons.mapPin} Sheet: <strong>${detail.sheet}</strong> | Cell: <strong>${detail.cell}</strong> (Row ${detail.row}, Col ${detail.col})<br>
                  <span class="cell-preview">${highlightedValue}</span>
                </div>
              `;
            });
          });
          detailsHtml += '</div>';
        }

        resultsDiv.innerHTML += `
          <h3 class="${fileCountsMatch ? '' : 'error'}">${Icons.file} File: ${result.fileName}</h3>
          ${sheetDiffHtml}
          <table class="${fileCountsMatch ? '' : 'highlight'}">
            <thead>
              <tr>
                <th>Search Text</th>
                <th>Occurrences</th>
              </tr>
            </thead>
            <tbody>
              ${rowsHtml || '<tr><td colspan="2">No occurrences found.</td></tr>'}
            </tbody>
          </table>
          ${detailsHtml}
        `;
      });

      infoNote.style.display = hasDifferences ? 'block' : 'none';
    }

    function exportResults() {
      if (!searchResults.length) {
        alert('No results to export.');
        return;
      }

      const searchTexts = searchTextsGlobal;
      if (!searchTexts.length) {
        alert('No search texts to export.');
        return;
      }

      let csv = 'File Name';
      searchTexts.forEach(text => {
        csv += `,"${text}"`;
      });
      csv += '\n';

      searchResults.forEach(result => {
        if (result.error) return;
        csv += `"${result.fileName}"`;
        searchTexts.forEach(text => {
          csv += `,${result.occurrences[text] ?? 0}`;
        });
        csv += '\n';
      });

      const blob = new Blob([csv], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `search_results_${new Date().getTime()}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }

    function escapeRegex(str) {
      return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    // Close modal when clicking outside
    window.onclick = function(event) {
      const modal = document.getElementById('filesModal');
      if (event.target === modal) {
        closeFilesModal();
      }
    }

    window.addEventListener('DOMContentLoaded', () => {
      initIcons();
      loadSearchTexts();
      loadSavedSearches();
      document.addEventListener('input', function(e) {
        if (e.target.classList.contains('searchText')) {
          saveSearchTexts();
        }
      });
      document.getElementById('showOnlyNonZero').addEventListener('change', renderView);
      document.getElementById('showDetails').addEventListener('change', renderView);
    });