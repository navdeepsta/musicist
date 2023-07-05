export function validateInput(inputValue) {
    validateForEmptyValue(inputValue)

    let specialChars = /[^\w\s]/;
    if (specialChars.test(inputValue)) {
      throw new Error("Input value contains special characters")
    }
}
  
export function validatePlaylistInput(inputValue) {
    validateForValidLength(inputValue)
}

export function validatePlaylist(playlist) {
  if(playlist.length === 0) throw new Error("Your playlist is empty. Please add songs to it.")
}

export function validateForEmptyValue(inputValue) {
  if (inputValue.trim().length === 0) {
    throw new Error("Input value is empty.");
  }
}

function validateForValidLength(inputValue) {
  if(inputValue.trim().length > 20) {
    throw new Error("Input value length must be less than 20");
  }
}