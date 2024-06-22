$(document).ready(function () {
    const portfolio = {
        chul_urina: `
            <h6 class="blog-title">Chul urina</h6>
            <div class="portfolio-modal-table">
                <div class="row">
                    <div class="col-md-6">
                        <h3 class="portfolio-modal-table-text">
                            <i class="fa-regular fa-file-lines"></i>
                            Project : <span>Website</span>
                        </h3>
                    </div>
                    <div class="col-md-6">
                        <h3 class="portfolio-modal-table-text">
                            <i class="fa-regular fa-user "></i>
                            Client : <span>Envato</span>
                        </h3>
                    </div>
                    <div class="col-md-6">
                        <h3 class="portfolio-modal-table-text">
                            <i class="fa-solid fa-code"></i>
                            Languages : <span>Photoshop, Figma</span>
                        </h3>
                    </div>
                    <div class="col-md-6">
                        <h3 class="portfolio-modal-table-text">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                            Preview : <a href="#">www.envato.com</a>
                        </h3>
                    </div>
                </div>
            </div>
            <div class="h1-modal-paragraph">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro
                    sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore
                    dolorum consequuntur quo obcaecati rerum sit non.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro
                    sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore
                    dolorum consequuntur quo obcaecati rerum sit non.</p>
            </div>
            <div class="h1-modal-img">
                <img src="assets/img/work/portfolio-modal-img-1.jpg" alt="">
            </div>
        `,
        aura_dione: `
            <h6 class="blog-title">Aura Dione</h6>
            <div class="portfolio-modal-table">
                <div class="row">
                    <div class="col-md-6">
                        <h3 class="portfolio-modal-table-text">
                            <i class="fa-regular fa-file-lines"></i>
                            Project : <span>Website</span>
                        </h3>
                    </div>
                    <div class="col-md-6">
                        <h3 class="portfolio-modal-table-text">
                            <i class="fa-regular fa-user "></i>
                            Client : <span>Envato</span>
                        </h3>
                    </div>
                    <div class="col-md-6">
                        <h3 class="portfolio-modal-table-text">
                            <i class="fa-solid fa-code"></i>
                            Languages : <span>Photoshop, Figma</span>
                        </h3>
                    </div>
                    <div class="col-md-6">
                        <h3 class="portfolio-modal-table-text">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                            Preview : <a href="#">www.envato.com</a>
                        </h3>
                    </div>
                </div>
            </div>
            <div class="h1-modal-paragraph">
                
            </div>
            <div class="h1-modal-img">
                <img src="assets/img/work/portfolio-modal-img-1.jpg" alt="">
            </div>
        `
    };

    $('.img[data-bs-toggle="modal"]').on('click', function(event) {
        event.preventDefault();

        var portfolioKey = $(this).attr('data-module_name');

        $('#portfolio-1 .modal-body').html(portfolio[portfolioKey]);
    });
});