const $FORM = document.getElementById('form')
const $INPUT = document.getElementById('input')
const $RESULTSUM = document.getElementById('sum')
const $RESULTMEAN = document.getElementById('mean')
const $RESULTMAX = document.getElementById('max')
const $RESULTMIN = document.getElementById('min')

function handleSubmit ( e ) {
  e.preventDefault()
  const input = $INPUT.value
  $FORM.reset()
  
  if (input) {
    const numbers = readInput(input)
  
    $RESULTSUM.innerText += ' ' + sum(numbers)
    $RESULTMEAN.innerText += ' ' + mean(numbers)
    $RESULTMAX.innerText += ' ' + max(numbers)
    $RESULTMIN.innerText += ' ' + min(numbers)
  }
}

function handleReset () {
  $RESULTSUM.innerText = 'Suma: '
  $RESULTMEAN.innerText = 'Media: '
  $RESULTMAX.innerText = 'Mayor: '
  $RESULTMIN.innerText = 'Menor: '
}

function readInput ( input ) {
  return input.split(',').map(item => parseInt(item))
}

function sum ( numbers ) {
  return numbers.reduce((sum, number) => sum + number)
}

function mean ( numbers ) {
  return sum(numbers) / numbers.length
}

function max ( numbers ) {
  let max = Number.MIN_VALUE

  numbers.forEach(number => {
    if (number > max) {
      max = number
    }
  })

  return max
}

function min ( numbers ) {
  let min = Number.MAX_VALUE

  numbers.forEach(number => {
    if (number < min) {
      min = number
    }
  })

  return min
}

$FORM.addEventListener('submit', handleSubmit)
$FORM.addEventListener('reset', handleReset)
