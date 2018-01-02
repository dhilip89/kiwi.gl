
/**
 * 全局设置操作
 */
const Encrypt_OVERALL = {
    'enable': true,
    'disable': true,
    //
    'texParameterf': true,
    'texParameteri': true,
    'texImage2D': true,
    'texSubImage2D': true,
    //
    'blendFuncSeparate': true,
    'blendEquation': true,
    'blendFunc': true,
    'blendEquationSeparate': true,
    //
    'compressedTexImage2D': true,
    'compressedTexSubImage2D': true,
    'viewport': true,
    'scissor': true,
    //
    'depthFunc': true,
    'depthMask': true,
    'colorMask': true,
    'frontFace': true,
    'cullFace': true,
    //
    'pixelStorei': true,
    'generateMipmap': true,
    'activeTexture': true,
    //
    'stencilOp': true,
    'stencilFunc': true,
    'stencilMask': true,
    //
    'hint': true
}
/**
 * 无返回类型的操作
 */
const Encrypt_VOID = {
    'bindTexture': true,
    'bindBuffer': true,
    'bindFramebuffer':true,
    'bufferData': true,
    'bufferSubData': true,
    //
    'disableVertexAttribArray':true,
    'enableVertexAttribArray':true,
    //delete
    'deleteBuffer': true,
    'deleteShader': true,
    'deleteProgram': true,
    'deleteFramebuffer': true,
    'deleteRenderbuffer': true,
    'deleteTexture':true,
    //uniformMatrix[]fv
    'uniformMatrix2fv': true,
    'uniformMatrix3fv': true,
    'uniformMatrix4fv': true,
    //uniform1[f][i][v]
    'uniform1f': true,
    'uniform1fv': true,
    'uniform1i': true,
    'uniform1iv': true,
    //uniform2[f][i][v]
    'uniform2f': true,
    'uniform2fv': true,
    'uniform2i': true,
    'uniform2iv': true,
    //uniform3[f][i][v]
    'uniform3f': true,
    'uniform3fv': true,
    'uniform3i': true,
    'uniform3iv': true,
    //uniform4[f][i][v]
    'uniform4f': true,
    'uniform4fv': true,
    'uniform4i': true,
    'uniform4iv': true,
}

const Encrypt_TICK={
    'drawElements': true,
    'drawArrays': true
}