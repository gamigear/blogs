import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Renderer2,Inject, signal, computed } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Container, Engine } from '@tsparticles/engine'; // Updated imports
import { NgParticlesService } from '@tsparticles/angular';
import { loadFull } from 'tsparticles';
import { NgxParticlesModule } from "@tsparticles/angular";
import { interval } from 'rxjs';
@Component({
  selector: 'app-under-maintanace',
  standalone: true,
  imports: [RouterModule,NgxParticlesModule],
  templateUrl: './under-maintanace.html',
  styleUrl: './under-maintanace.scss'
})
export class UnderMaintanace {
  constructor(@Inject(DOCUMENT) private document: Document,private elementRef: ElementRef,private readonly ngParticlesService: NgParticlesService,
  private renderer: Renderer2){
    document.body.classList.add('coming-soon-main');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('coming-soon-main');
  }
  private countDownDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).getTime(); // 3 days from now

  private now = signal(Date.now());

  public days = computed(() =>
    Math.floor((this.countDownDate - this.now()) / (1000 * 60 * 60 * 24))
  );
  public hours = computed(() =>
    Math.floor((this.countDownDate - this.now()) % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
  );
  public minutes = computed(() =>
    Math.floor((this.countDownDate - this.now()) % (1000 * 60 * 60) / (1000 * 60))
  );
  public seconds = computed(() =>
    Math.floor((this.countDownDate - this.now()) % (1000 * 60) / 1000)
  );

  ngOnInit(): void {
    this.ngParticlesService.init(async (engine: Engine) => {
      await loadFull(engine); // Load core features (optional, depending on needs)
    });
     interval(1000).subscribe(() => {
        this.now.set(Date.now());
      });
  }
  particlesLoaded(container: Container): void {
    console.log(container);
}
  id = "tsparticles";

  particlesOptions:any  = {
    particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          value_area: 400
        }
      },
      color: {
        value: '#985ffd'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#ff0000'
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: '',
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 2,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: 1.5,
        random: false,
        anim: {
          enable: false,
          speed: 5,
          size_min: 0,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: '#fff',
        opacity: 1,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 3000,
          rotateY: 3000
        }
      },
      array: []
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
          onHover: {
          enable: true,
          mode: 'grab'
        },
        onClick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab:{
          distance: 100,
          line_linked:{
            opacity: 1
          }
        },
        bubble:{
          distance: 200,
          size: 80,
          duration: 0.4
        },
        repulse:{
          distance: 200,
          duration: 0.4
        },
        push:{
          particles_nb: 4
        },
        remove:{
          particles_nb: 2
        }
      },
      mouse:{}
    },
    retina_detect: false,
  };
}
