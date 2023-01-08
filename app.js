;(function () {
  if ('geolocation' in navigator) {
    const detectButton = document.querySelector('button[id="detect"]')
    if (detectButton) {
      detectButton.addEventListener('click', () => {
        detectButton.textContent = 'Detectando...'
        detectButton.setAttribute('disabled', 'true')
        navigator.geolocation.getCurrentPosition(onSuccess, onError)
      })
      function onSuccess(coordinates) {
        console.log('Success', coordinates)
        detectButton.textContent = 'Detectar'
        detectButton.className = 'btn btn-success'
        detectButton.removeAttribute('disabled')
        const success = document.querySelector('p[id="success"]')
        if (success) {
          success.textContent = `Sua localização atual é (${coordinates.coords.latitude}, ${coordinates.coords.longitude})`
        }
      }
      function onError(error) {
        console.log('Error', error)
        detectButton.textContent = 'Detection Failed'
        detectButton.className = 'btn btn-danger'
        detectButton.removeAttribute('disabled')
        const errorPlaceholder = document.querySelector('p[id="error"]')
        if (errorPlaceholder) {
          errorPlaceholder.textContent =
            error.message || 'Algo deu errado...'
        }
      }
    }
  } else {
    const unsupportedDOM = document.querySelector('div[id="unsupported"]')
    const supportedDOM = document.querySelector('div[id="supported"]')
    if (unsupportedDOM) {
      unsupportedDOM.style.display = 'block'
    }
    if (supportedDOM) {
      supportedDOM.style.display = 'none'
    }
  }
})()
