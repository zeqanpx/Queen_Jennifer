FROM quay.io/lyfe00011/test:beta
# FROM blackamda/queenamdi:public
# FROM ravindu01manoj/sewqueen:lovegift

RUN git clone https://github.com/zeqanpx/Queen_Jennifer.git /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
RUN yarn install --no-audit
RUN git clone https://github.com/AiDarkEzio/medias.git
RUN cp -R /root/Utils/* /root/WhatsAsenaDuplicated 
CMD ["node", "bot.js"]
