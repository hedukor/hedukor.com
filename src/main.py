from libmain import doRender

import webapp2
import logging


class MainPageHandler(webapp2.RequestHandler):
    def get(self):
        values = dict()
        values['testarea'] = "this is a test string"       
        values['css'] = ['/static/css/main.css']
        values['javascript'] = ['']
        logging.error("main running")
        
        doRender(self, 'index.html', values)
        
app = webapp2.WSGIApplication([('/', MainPageHandler),
                                ('/main', MainPageHandler)
                                          ],debug = True)
    

