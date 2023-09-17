document.addEventListener('DOMContentLoaded', function() {
    // sidenav initialisation
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // datepicker initialization, cahen var to let and our name
    // remove the placeholder options into an object found in materialse options
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: "dd mmm, yyyy",
      i18n: {done: "Select"}
    });

    // select/dropdown initialization
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);

    // collapsible initialization
    let collapsible = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsible);
  });
  