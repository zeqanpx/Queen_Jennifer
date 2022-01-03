const Ezio = require('../events');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const https = require('https');
const { MessageType, Mimetype, MessageOptions } = require('@adiwajshing/baileys');
const conf = require('../config');
const axios = require('axios');
const os = require('os');