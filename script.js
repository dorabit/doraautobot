document.addEventListener("DOMContentLoaded", function() {
    console.log("🚀 الموقع الاحترافي جاهز!");
    
    // مثال: تأثير عند إرسال النموذج
    const form = document.querySelector("form");
    form.addEventListener("submit", function(e){
        e.preventDefault();
        alert("✅ تم إرسال رسالتك بنجاح!");
        form.reset();
    });
});
