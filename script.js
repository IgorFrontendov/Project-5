

function formatPhoneNumber(input) {
  var cleaned = input.value.replace(/\D/g, '');
  var formatted = '';
  var match;
  if (match = cleaned.match(/^(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})(.*)$/)) {
    formatted = '+' + match[1] + (match[2] ? ' (' + match[2] : '') + (match[3] ? ') ' + match[3] : '') + (match[4] ? '-' + match[4] : '') + (match[5] ? '-' + match[5] : '');
  }
  
  input.value = formatted;
}