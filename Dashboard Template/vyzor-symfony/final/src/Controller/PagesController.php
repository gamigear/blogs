<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PagesController extends AbstractController
{
    #[Route('/blog-create', name: 'app_blog_create')]
    public function blogCreate(): Response
    {
        return $this->render('pages/blog-create.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/blog-details', name: 'app_blog_details')]
    public function blogDetails(): Response
    {
        return $this->render('pages/blog-details.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/blog', name: 'app_blog')]
    public function blog(): Response
    {
        return $this->render('pages/blog.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/coming-soon', name: 'app_coming_soon')]
    public function comingSoon(): Response
    {
        return $this->render('pages/coming-soon.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/create-password-basic', name: 'app_create_password_basic')]
    public function createPasswordBasic(): Response
    {
        return $this->render('pages/create-password-basic.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/create-password-cover', name: 'app_create_password_cover')]
    public function createPasswordCover(): Response
    {
        return $this->render('pages/create-password-cover.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/emptypage', name: 'app_emptypage')]
    public function emptypage(): Response
    {
        return $this->render('pages/emptypage.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/error401', name: 'app_error401')]
    public function error401(): Response
    {
        return $this->render('pages/error401.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/error404', name: 'app_error404')]
    public function error404(): Response
    {
        return $this->render('pages/error404.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/error500', name: 'app_error500')]
    public function error500(): Response
    {
        return $this->render('pages/error500.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/faqs', name: 'app_faqs')]
    public function faqs(): Response
    {
        return $this->render('pages/faqs.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/floating-labels', name: 'app_floating_labels')]
    public function floatingLabels(): Response
    {
        return $this->render('pages/floating-labels.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/form-advanced', name: 'app_form_advanced')]
    public function formAdvanced(): Response
    {
        return $this->render('pages/form-advanced.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/form-check-radios', name: 'app_form_check_radios')]
    public function formCheckRadios(): Response
    {
        return $this->render('pages/form-check-radios.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/form-color-pickers', name: 'app_form_color_pickers')]
    public function formColorPickers(): Response
    {
        return $this->render('pages/form-color-pickers.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/form-datetime-pickers', name: 'app_form_datetime_pickers')]
    public function formDatetimePickers(): Response
    {
        return $this->render('pages/form-datetime-pickers.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/form-file-uploads', name: 'app_form_file_uploads')]
    public function formFileUploads(): Response
    {
        return $this->render('pages/form-file-uploads.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/form-input-group', name: 'app_form_input_group')]
    public function formInputGroup(): Response
    {
        return $this->render('pages/form-input-group.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/form-input-masks', name: 'app_form_input_masks')]
    public function formInputMasks(): Response
    {
        return $this->render('pages/form-input-masks.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/form-inputs', name: 'app_form_inputs')]
    public function formInputs(): Response
    {
        return $this->render('pages/form-inputs.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/form-layout', name: 'app_form_layout')]
    public function formLayout(): Response
    {
        return $this->render('pages/form-layout.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/form-range', name: 'app_form_range')]
    public function formRange(): Response
    {
        return $this->render('pages/form-range.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/form-select', name: 'app_form_select')]
    public function formSelect(): Response
    {
        return $this->render('pages/form-select.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/form-select2', name: 'app_form_select2')]
    public function formSelect2(): Response
    {
        return $this->render('pages/form-select2.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/form-validation', name: 'app_form_validation')]
    public function formValidation(): Response
    {
        return $this->render('pages/form-validation.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/form-wizards', name: 'app_form_wizards')]
    public function formWizards(): Response
    {
        return $this->render('pages/form-wizards.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/invoice-create', name: 'app_invoice_create')]
    public function invoiceCreate(): Response
    {
        return $this->render('pages/invoice-create.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/invoice-details', name: 'app_invoice_details')]
    public function invoiceDetails(): Response
    {
        return $this->render('pages/invoice-details.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/invoice-list', name: 'app_invoice_list')]
    public function invoiceList(): Response
    {
        return $this->render('pages/invoice-list.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/landing', name: 'app_landing')]
    public function landing(): Response
    {
        return $this->render('pages/landing.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/lockscreen-basic', name: 'app_lockscreen_basic')]
    public function lockscreenBasic(): Response
    {
        return $this->render('pages/lockscreen-basic.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/lockscreen-cover', name: 'app_lockscreen_cover')]
    public function lockscreenCover(): Response
    {
        return $this->render('pages/lockscreen-cover.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/pricing', name: 'app_pricing')]
    public function pricing(): Response
    {
        return $this->render('pages/pricing.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/profile-settings', name: 'app_profile_settings')]
    public function profileSettings(): Response
    {
        return $this->render('pages/profile-settings.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/profile', name: 'app_profile')]
    public function profile(): Response
    {
        return $this->render('pages/profile.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/quill-editor', name: 'app_quill_editor')]
    public function quillEditor(): Response
    {
        return $this->render('pages/quill-editor.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/reset-password-basic', name: 'app_reset_password_basic')]
    public function resetPasswordBasic(): Response
    {
        return $this->render('pages/reset-password-basic.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/reset-password-cover', name: 'app_reset_password_cover')]
    public function resetPasswordCover(): Response
    {
        return $this->render('pages/reset-password-cover.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/search-results', name: 'app_search_results')]
    public function searchResults(): Response
    {
        return $this->render('pages/search-results.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/sign-in-basic', name: 'app_sign_in_basic')]
    public function signInBasic(): Response
    {
        return $this->render('pages/sign-in-basic.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/sign-in-cover', name: 'app_sign_in_cover')]
    public function signInCover(): Response
    {
        return $this->render('pages/sign-in-cover.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/sign-up-basic', name: 'app_sign_up_basic')]
    public function signUpBasic(): Response
    {
        return $this->render('pages/sign-up-basic.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/sign-up-cover', name: 'app_sign_up_cover')]
    public function signUpCover(): Response
    {
        return $this->render('pages/sign-up-cover.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/team', name: 'app_team')]
    public function team(): Response
    {
        return $this->render('pages/team.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/terms-conditions', name: 'app_terms_conditions')]
    public function termsConditions(): Response
    {
        return $this->render('pages/terms-conditions.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/testimonials', name: 'app_testimonials')]
    public function testimonials(): Response
    {
        return $this->render('pages/testimonials.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/timeline', name: 'app_timeline')]
    public function timeline(): Response
    {
        return $this->render('pages/timeline.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/two-step-verification-basic', name: 'app_two_step_verification_basic')]
    public function twoStepVerificationBasic(): Response
    {
        return $this->render('pages/two-step-verification-basic.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/two-step-verification-cover', name: 'app_two_step_verification_cover')]
    public function twoStepVerificationCover(): Response
    {
        return $this->render('pages/two-step-verification-cover.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

    #[Route('/under-maintenance', name: 'app_under_maintenance')]
    public function underMaintenance(): Response
    {
        return $this->render('pages/under-maintenance.html.twig', [
            'controller_name' => 'PagesController',
        ]);
    }

}
