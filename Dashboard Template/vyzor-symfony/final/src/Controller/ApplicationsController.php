<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ApplicationsController extends AbstractController
{

    #[Route('/chat', name: 'app_chat')]
    public function chat(): Response
    {
        return $this->render('applications/chat.html.twig');
    }

    #[Route('/file-manager', name: 'app_file_manager')]
    public function fileManager(): Response
    {
        return $this->render('applications/file-manager.html.twig');
    }

    #[Route('/full-calendar', name: 'app_full_calendar')]
    public function fullCalendar(): Response
    {
        return $this->render('applications/full-calendar.html.twig');
    }

    #[Route('/gallery', name: 'app_gallery')]
    public function gallery(): Response
    {
        return $this->render('applications/gallery.html.twig');
    }

    #[Route('/mail-settings', name: 'app_mail_settings')]
    public function mailSettings(): Response
    {
        return $this->render('applications/mail-settings.html.twig');
    }

    #[Route('/mail', name: 'app_mail')]
    public function mail(): Response
    {
        return $this->render('applications/mail.html.twig');
    }

    #[Route('/sweet-alerts', name: 'app_sweet_alerts')]
    public function sweetAlerts(): Response
    {
        return $this->render('applications/sweet-alerts.html.twig');
    }

    #[Route('/task-kanban-board', name: 'app_task_kanban_board')]
    public function taskKanbanBoard(): Response
    {
        return $this->render('applications/task-kanban-board.html.twig');
    }

    #[Route('/task-list-view', name: 'app_task_list_view')]
    public function taskListView(): Response
    {
        return $this->render('applications/task-list-view.html.twig');
    }

    #[Route('/to-do-list', name: 'app_to_do_list')]
    public function toDoList(): Response
    {
        return $this->render('applications/to-do-list.html.twig');
    }

}
