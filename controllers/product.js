

const path = require('path');

const rootDir = require('../util/path');

exports.getProduct = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'));
}

exports.postProduct = (req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
}

exports.getShop = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'));
}

exports.getContact =(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact.html'));
}

exports.postContact =(req,res,next)=>{
    console.log(req.body);
    res.redirect('/success');
}

exports.getSuccess = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','success.html'));
}