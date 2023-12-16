document.addEventListener('DOMContentLoaded', function () {
  let uploadScreen = document.getElementById('upload-screen');
  let errorScreen = document.getElementById('error');
  let viewTableScreen = document.getElementById('view-table');
  let fileInputButton = document.getElementById('button-home');
  let reloadButton = document.getElementById('button-table');
  let dragScreen = document.getElementById('drag-screen');

  let savedData = localStorage.getItem('csvData');
 
  if (savedData) {
      showTableScreen();
      const parsedData = JSON.parse(savedData);
      renderTable(parsedData);
  } 
  
  
  // else {

      fileInputButton.addEventListener('click', function () {
          // Создаем элемент input для выбора файла
          let fileInput = document.createElement('input');
          fileInput.type = 'file';
          fileInput.addEventListener('change', function (event) {
              let selectedFile = event.target.files[0];
              if (selectedFile && selectedFile.name.toLowerCase().endsWith('.csv')) {
                  // Чтение файла и обработка данных
                  handleCSVFile(selectedFile);
              } else {
                  errorScreen.style.display = 'block';
              }
          });
          fileInput.click();
          errorScreen.style.display = 'none';
      });

      function handleDragOver(event) {
        event.preventDefault();
        dragScreen.style.display = 'block';
        uploadScreen.style.display = 'none';
        errorScreen.style.display = 'none';
      }
      
      function handleDrop(event) {
        event.preventDefault();
        const files = event.dataTransfer.files;
          if (files.length === 1) {
            const selectedFile = files[0];
            if (selectedFile.name.toLowerCase().endsWith('.csv')) {
              handleCSVFile(selectedFile);
            } else {
              errorScreen.style.display = 'block';
            }
        } else {
          errorScreen.style.display = 'block';
        }
      }

      function handleCSVFile(file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const fileContent = e.target.result;
          // Обработка и сохранение данных в браузере
          const parsedData = processCSV(fileContent);
          localStorage.setItem('csvData', JSON.stringify(parsedData));
          showTableScreen();
          // Отображение данных в таблице
          renderTable(parsedData);
        };
        reader.readAsText(file, 'CP1251');
      }
    
      uploadScreen.addEventListener('dragover', handleDragOver);
      uploadScreen.addEventListener('drop', handleDrop);
      dragScreen.addEventListener('dragover', handleDragOver);
      dragScreen.addEventListener('drop', handleDrop);
      viewTableScreen.addEventListener('drop', handleDrop);

    // //////////}

    // Добавляем слушатель события "click" на кнопке "Загрузить новый файл"
    reloadButton.addEventListener('click', function () {
      localStorage.getItem('csvData');
      localStorage.removeItem('csvData');
      showUploadScreen();
    });

    function showUploadScreen() {
      uploadScreen.style.display = 'block';
      viewTableScreen.style.display = 'none';
      dragScreen.style.display = 'none';     
    }

    function showTableScreen() {
      uploadScreen.style.display = 'none';
      dragScreen.style.display = 'none';
      viewTableScreen.style.display = 'block';
    }
  });


  function processCSV(csvContent) {
    const lines = csvContent.split(/\r\n|\n/);
    const data = lines.slice(1).map(line => {
      const columns = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
        // Проверяем, достаточно ли элементов в массиве
      if (columns.length >= 5) {
        const [name, phone, email, bday, rawAddress] = columns;
        // Убираем кавычки из значения address
        const address = rawAddress.replace(/^"(.*)"$/, '$1');
        return { name, phone, email, bday, address };
        }
      // Возвращаем пустой объект в случае нехватки элементов
      return {};
      });
    return data;
  }
  
  function renderTable(data) {
    tableBody.innerHTML = '';
    // Проходим по каждому объекту в массиве данных
    data.forEach(item => {
      // Создаем строку для каждого объекта
      const row = document.createElement('tr');
      // Проходим по каждому свойству объекта
      for (const key in item) {
        if (item.hasOwnProperty(key)) {
          // Создаем ячейку для каждого свойства и добавляем в строку
          const cell = document.createElement('td');
          // Проверяем, равно ли значение undefined, и устанавливаем пустую строку
          cell.textContent = item[key] !== undefined ? item[key] : '';
          row.appendChild(cell);
        }
      }
      // Добавляем строку в tbody
      tableBody.appendChild(row);
    });
  }
  