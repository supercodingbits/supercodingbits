import React from 'react'
import Footer from '../../HeaderandFooter/Footer'
import Header from '../../HeaderandFooter/Header'
import BlogImage1 from '../../images/installation-guide-for-android-studio.png'

const InstallationGuideforAndroidStudio = () => {
    return (
        <>
            <Header />
            <div className="main">
                <div class="container">
                    <span class="titles"> Card Blur Hover Effect </span>
                    <div class="image">
                        <img src={BlogImage1} alt="responsive-navigation-bar" />
                    </div>
                    <div class="content">
                        <h3>Introduction</h3>
                        <p>
                            This guide will show you how to set up Android Studio on Windows 10 to develop Android apps. It covers
                            downloading and installing the software, setting up the Android SDK, and creating a virtual device to
                            test your apps on.
                        </p>
                    </div>
                    <div class="content">
                        <h3>Prerequisites:</h3>
                        <ul>
                            <li><span>Operating System:</span> Windows 10</li>
                            <li><span>RAM & ROM:</span> 8 GB RAM and 512 GB SSD</li>
                            <li><span>Processor:</span> x86_64 CPU architecture; 2nd generation Intel Core or newer, or AMD CPU with
                                support for Windows Hypervisor Framework.</li>
                        </ul>
                    </div>
                    <div class="content">
                        <h3>Java Development Kit (JDK):</h3>
                        <p>
                            Ensure you have the latest version of the Java Development Kit (JDK) installed. Download it from the
                            official Oracle website: <a href="https://www.oracle.com/in/java/technologies/downloads/"
                                target="_blank">https://www.oracle.com/in/java/technologies/downloads/</a>
                        </p>
                    </div>
                    <div class="content">
                        <h3>Installation Steps:</h3>
                        <ul>
                            <li><span>Visit the Official Website:</span> Go to <a href="https://developer.android.com/studio"
                                target="_blank">https://developer.android.com/studio</a></li>
                            <li><span>Download Android Studio Hedgehog:</span> Click on the download link provided.</li>
                            <li><span>Read Terms and Conditions:</span> Read and agree to the terms and conditions.</li>
                            <li><span>Download:</span> Click on the download button.</li>
                            <li><span>Launch Setup Wizard:</span> Double-click the installer file to launch the setup wizard.</li>
                            <li><span>Follow On-screen Instructions:</span> Follow the on-screen instructions, accepting default
                                settings unless you have specific requirements.</li>
                        </ul>
                    </div>
                    <div class="content">
                        <h3>SDK Install Process:</h3>
                        <ul>
                            <li><span>Access SDK Manager:</span> From the Android Studio homepage, click on "More Actions," then
                                select "SDK Manager."</li>
                            <li><span>Choose Android SDK Platform:</span> Navigate to "Android 13.0 ("Tiramisu")", select "Android
                                SDK Platform 33," and "Intel x86_64 Atom System Image".</li>
                            <li><span>Installation:</span> Click "OK" and proceed with installation. If there are issues, install
                                components one by one.</li>
                        </ul>
                    </div>

                    <div class="content">
                        <h3>Virtual Device Manager:</h3>
                        <ul>
                            <li><span>Access Virtual Device Manager:</span> Click on "Virtual Device Manager".</li>
                            <li><span>Select Hardware:</span> Choose hardware specifications as per requirements and click "Next".
                            </li>
                            <li><span>Select System Image:</span> Choose a system image (e.g., UpsideDownCake) and proceed.</li>
                            <li><span>Verify Configuration:</span> Review the configuration and click "Finish".</li>
                            <li><span>Creation Complete:</span> A virtual device is created successfully.</li>
                            <li><span>Start Virtual Device:</span> Click on the "Play" button to start the virtual device.</li>
                        </ul>
                    </div>
                    <div class="content">
                        <h3>Conclusion</h3>
                        <p>
                            By following these steps, you have successfully installed Android Studio and created a virtual device to
                            begin your Android development journey.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default InstallationGuideforAndroidStudio