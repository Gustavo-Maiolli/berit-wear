import './Feedback.css'

function Feedback(){
    return(
        <div className="Feedback">
            <div className="Feedback__container">
                    <div className="Feedback__card">
                        <div className="Feedback__user">
                            <div className="Feedback__user__icon">
                                <img src="https://res.cloudinary.com/dohv3aakv/image/upload/v1770820241/berit-logo_fjqfl2.png"></img>
                            </div>
                            <div className="Feedback__user__name">
                                <p>Bruno</p>
                            </div>
                        </div>
                    <div className="Feedback__stars">
                        <img src="assets/star-solid-full.svg"></img>
                        <img src="assets/star-solid-full.svg"></img>
                        <img src="assets/star-solid-full.svg"></img>
                        <img src="assets/star-solid-full.svg"></img>
                        <img src="assets/star-solid-full.svg"></img>
                    </div>
                    <div className="Feedback__text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis gravida diam in bibendum.</p>
                    </div>
                </div>
                <div className="Feedback__card">
                    <div className="Feedback__user">
                        <div className="Feedback__user__icon">
                            <img src="assets/user-solid-full.svg"></img>
                        </div>
                        <div className="Feedback__user__name">
                            <p>Lucas</p>
                        </div>
                    </div>
                    <div className="Feedback__stars">
                        <img src="assets/star-solid-full.svg"></img>
                        <img src="assets/star-solid-full.svg"></img>
                        <img src="assets/star-solid-full.svg"></img>
                        <img src="assets/star-regular-full.svg"></img>
                        <img src="assets/star-regular-full.svg"></img>
                    </div>
                    <div className="Feedback__text">
                        <p>Nullam elit leo, convallis eget tempus sed, tristique eu justo. Pellentesque mattis gravida diam in bibendum.</p>
                    </div>
                </div>
                <div className="Feedback__card">
                    <div className="Feedback__user">
                        <div className="Feedback__user__icon">
                            <img src="assets/user-solid-full.svg"></img>
                        </div>
                        <div className="Feedback__user__name">
                            <p>Maiolli</p>
                        </div>
                    </div>
                    <div className="Feedback__stars">
                        <img src="assets/star-solid-full.svg"></img>
                        <img src="assets/star-solid-full.svg"></img>
                        <img src="assets/star-solid-full.svg"></img>
                        <img src="assets/star-solid-full.svg"></img>
                        <img src="assets/star-regular-full.svg"></img>
                    </div>
                    <div className="Feedback__text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor lacus sed nisl viverra finibus.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feedback;