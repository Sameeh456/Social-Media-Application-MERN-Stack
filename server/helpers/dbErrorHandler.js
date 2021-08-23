'use strict'

/**
 * Get unique error field name
 */
const getUniqueErrorMessage = (err) => {
    let output
    try {
        let fieldName = err.message.substring(err.message.lastIndexOf('.$') + 2, err.message.lastIndexOf('_1'))
        output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + 'already exists'
    } catch(ex) {
        return 'Unique field already exists'
    }

    return output
}

/**
 * Get the error message from the error object
 */
const getErrorMessage = (err) => {
    let message = ''

    if(err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message = getErrorMessage(err)
        }
    }
}