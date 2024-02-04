// Returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  let badge = '';

  if (license != "Null") {
    badge = "![License Badge](https://shields.io/badge/license-" + license + "-green)";
  }

  return badge;
}

// Returns the license link
function renderLicenseLink(license) {

  let licenseLink = '';

  switch(license) {
    case "MIT":
      licenseLink = "https://mit-license.org/";
      break;
    case "BSD":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "GPL":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    case "Apache":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;
    default:
      licenseLink = "";
      break;
  }
  
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";

  if (license != "Null") {
    licenseSection += "## License\n"
    licenseSection += "Please see " + renderLicenseLink(license) + " to get detailed information for this license\n";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
