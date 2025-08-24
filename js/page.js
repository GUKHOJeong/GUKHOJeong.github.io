document.addEventListener('DOMContentLoaded', function() {
        
            const sections = document.querySelectorAll('.resume-section');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            let currentSectionIndex = 0; 

            function showSection(index) {
                sections.forEach(section => {
                    section.classList.remove('active');
                });

                sections[index].classList.add('active');
            }


            nextBtn.addEventListener('click', () => {

                currentSectionIndex = (currentSectionIndex + 1) % sections.length;
                showSection(currentSectionIndex);
            });


            prevBtn.addEventListener('click', () => {

                currentSectionIndex = (currentSectionIndex - 1 + sections.length) % sections.length;
                showSection(currentSectionIndex);
            });


            showSection(currentSectionIndex);
        });