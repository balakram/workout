document.addEventListener("DOMContentLoaded", function() {
    const filterButton = document.querySelector(".filter-button");
    const popup = document.getElementById("popup");
    const closePopup = document.querySelector(".close-popup");
    const applyFilterBtn = document.getElementById("apply-filter");
    const filterTypeBtns = document.querySelectorAll(".filter-type-btn");
    const filterOptionCheckboxes = document.querySelectorAll(".filter-option-checkbox");
    const filterSections = document.querySelectorAll(".filter-section");
    const selectedCount = document.getElementById("selected-count");
    const selectAllBtn = document.getElementById("select-all-btn");


    // Event listener for the "Select All" button
    selectAllBtn.addEventListener("click", function() {
        const selectAll = !filterOptionCheckboxes[0].checked; // Toggle select all based on the state of the first checkbox

        // Update the checked state of all checkboxes
        filterOptionCheckboxes.forEach(function(checkbox) {
            checkbox.checked = selectAll;
        });

        // Update the count after toggling selection
        updateSelectedCount();
    });

    // Function to update the count of selected checkboxes
    function updateSelectedCount() {
        let selectedFilters = 0;
        filterOptionCheckboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                selectedFilters++;
            }
        });
        document.getElementById("selected-count").textContent = selectedFilters + " selected out of " + filterOptionCheckboxes.length;
    }

    // Event listener for individual checkbox changes
    filterOptionCheckboxes.forEach(function(checkbox) {
        checkbox.addEventListener("change", function() {
            updateSelectedCount(); // Update the count whenever a checkbox is changed
        });
    });
    // Trigger click event on equipment filter button by default
    document.querySelector('.filter-type-btn[data-target="equipment-section"]').click();

    // -----------------count---------------------------
    
    const totalOptionsCount = filterOptionCheckboxes.length;

    let selectedFilters = 0;

    filterButton.addEventListener("click", function() {
        popup.style.display = "block";
    });

    closePopup.addEventListener("click", function() {
        popup.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });

    filterTypeBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            // Hide all filter sections
            filterSections.forEach(function(section) {
                section.style.display = "none";
            });

            // Show the selected filter section
            const targetSectionId = this.getAttribute("data-target");
            const targetSection = document.getElementById(targetSectionId);
            if (targetSection) {
                targetSection.style.display = "block";
            }
        });
    });

    filterOptionCheckboxes.forEach(function(checkbox) {
        checkbox.addEventListener("change", function() {
            if (this.checked) {
                selectedFilters++;
            } else {
                selectedFilters--;
            }
            updateSelectedCount();
        });
    });

    function updateSelectedCount() {
        selectedCount.textContent = " Equipments: "+ selectedFilters +"/"+ totalOptionsCount;
    }

    applyFilterBtn.addEventListener("click", function() {
        // Apply filter logic based on the selected options when "Apply Filter" button is clicked
        // Close the popup after applying filter
        popup.style.display = "none";
    });
});
