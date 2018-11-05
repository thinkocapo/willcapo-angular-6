import { Component, OnInit } from '@angular/core';

/*
Markdown Editor but need Render Markdown
http://inacho.github.io/bootstrap-markdown-editor/

says use Jekyll to convert
https://medium.freecodecamp.org/style-webpage-or-markdown-like-medium-article-using-html-css-sass-bootstrap-c6f9e64c0955


Markdown to HTML Online Converter
https://markdowntohtml.com/ GREAT
https://www.browserling.com/tools/markdown-to-html
https://zapier.com/blog/markdown-html-export/
*/

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
/**
 * SECTIONS
 * 
 * Blockchain,
 * Job Titles, Types
 * MC
 * Review old resumes
 * 
 * Set default sections
 */

 // todo
 // hide footer when viewing resume, and scroll/adjust the view.
 // take away the scrollable?