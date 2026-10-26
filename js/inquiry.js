// Adirondack Craftworks inquiry form.
// To turn the form on, paste the Formspree form ID (the part after formspree.io/f/) between the quotes below.
// While it is empty, no form is shown and nothing is posted; visitors see the email and phone links only.
const FORMSPREE_ID = "";

(function () {
  var id = (FORMSPREE_ID || "").trim();
  if (!/^[A-Za-z0-9]+$/.test(id)) return;
  var tpl = document.getElementById("inquiry-form-template");
  var slot = document.getElementById("inquiry-form-slot");
  if (!tpl || !slot) return;
  var node = tpl.content.cloneNode(true);
  var form = node.querySelector("form");
  form.setAttribute("action", "https://formspree.io/f/" + encodeURIComponent(id));
  form.setAttribute("method", "POST");
  slot.appendChild(node);
  slot.hidden = false;
})();
