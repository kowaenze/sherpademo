$(document).ready(function()
{
	$('.slider').slider({full_width: true});

	$(".button-collapse").sideNav();



	 // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
        
    //The following are custom JS    

    $('#register--to-step-2').click(function()
    {
    	$('#register--form-1').slideUp(function()
    	{
    		$('#register--form-2').slideDown();
    	});
    })

    $('#register--to-step-3').click(function()
    {
    	$('#register--form-2').slideUp(function()
    	{
    		$('#register--form-3').slideDown();
    	});
    })

    $('#register--back-step-1').click(function()
    {
    	$('#register--form-2').slideUp(function()
    	{
    		$('#register--form-1').slideDown();
    	});
    })

    $('.web__inbox-link').click(function()
    {
    	$('.web__sent-messages').fadeOut();
    	$('.web__settings').fadeOut();
    	$('.web__inbox').delay(400).fadeIn();
    })

    $('.web__sent-messages-link').click(function()
    {
    	$('.web__settings').fadeOut();
    	$('.web__inbox').fadeOut();
    	$('.web__sent-messages').delay(400).fadeIn();
    })

    $('.web__settings-link').click(function()
    {
    	$('.web__sent-messages').fadeOut();
    	$('.web__inbox').fadeOut();
    	$('.web__settings').delay(400).fadeIn();
    })

    $('a#web__create-sms').click(function()
    {
	    $('.web__create-form').attr('id', 'web__create-sms');
        $('#web__create-sms > div > div > h5').text("Send to SMS");
    })

    $('a#web__create-email').click(function()
    {
	    $('.web__create-form').attr('id', 'web__create-email');
        $('#web__create-email > div > div > h5').text("Send to Email");
    })

    $('a#web__create-messenger').click(function()
    {
	    $('.web__create-form').attr('id', 'web__create-messenger');
        $('#web__create-messenger > div > div > h5').text("Send to Messenger");
    })

    $('a#web__create-hangouts').click(function()
    {
	    $('.web__create-form').attr('id', 'web__create-hangouts');
        $('#web__create-hangouts > div > div > h5').text("Send to Hangouts");
    })

    $('a#web__create-viber').click(function()
    {
	    $('.web__create-form').attr('id', 'web__create-viber');
        $('#web__create-viber > div > div > h5').text("Send to Viber");
    })
});
