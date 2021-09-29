function createResults(error,data) {
    const result = {}
    if(error)
    {
        result['status'] = 'error'
        result['data'] = error
    }
    else{
        result['status'] = 'Success'
        result['data'] = data
    }
    return result
}

module.exports={
    createResults: createResults
}