const path = require('path');
const fs = require('fs');
const default_template = path.join(__dirname, 'builder/index.html');


let WriteIndex = () => {
  let written = fs.writeFileSync('./index.html', template_code);
  console.log(`Written ${written} bytes...`);
}

let ReadTemplate = (template_path) => {
  if (fs.existsSync(template_path)) {
    let buf = fs.readFileSync(template_path, {
      encoding: 'utf-8'
    });
    console.log(`Read ${buf.length} bytes from ${template_path}...`);
    template_code = buf;
  } else {
    console.log('Template file not found exiting...');
    process.exit(404);
  }
}

let InsertTitle = (titleStr) => {
  template_code = template_code.replace('#TITLE#', titleStr);
  console.log(`Setted title to ${titleStr}...`);

}

let InsertLinks = (links) => {
  template_code = template_code.replace('#INSERT#', links);
  console.log(`Inserted ${links.length} bytes into template...`);

}

let createTaskLink = (href, name, date_mod) => {
  return `<li class="nav-item">
  <a class="nav-link active" href="${href}">
  ${name}
  <span class="text-secondary float-right">
  Last Edit: ${date_mod}
  </span>
  </a>
</li>\n`
}

let createLis = (obj) => {
  let navCode = '';

  console.log(`Generating ${obj.length} links...`);

  obj.forEach(el => {
    let {
      href,
      name,
      date_mod
    } = el;
    navCode += createTaskLink(href, name, date_mod);
  });

  console.log(`Generated ${navCode.split(/\r\n|\r|\n/).length} lines...`);
  return navCode;
}

let template_code = ''
let doBuild = (obj, template) => {
  if (typeof template === "undefined") {
    template = default_template
    console.log("Template path not specified using default...");
  }
  ReadTemplate(template);
  let lis = createLis(obj);
  InsertTitle('Absolute Flex...');
  InsertLinks(lis);
  WriteIndex()
  console.log('🎉 Done! Handing of control to lite-server...\n\n');

}

module.exports = {
  doBuild
};
