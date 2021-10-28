<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* modules/audiofield/templates/audioplayer.html.twig */
class __TwigTemplate_68b8af53cc83f6dbba7d72e4c8027a603d1a20d91d0212a70185ffa4ed92c254 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 15
        echo "<div class=\"audiofield\">
  ";
        // line 16
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["files"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["file"]) {
            // line 17
            echo "    <div class=\"audiofield-player\">
      <audio id=\"audiofield-audio-player-";
            // line 18
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["file"], "id", [], "any", false, false, true, 18), 18, $this->source), "html", null, true);
            echo "\" preload=\"";
            if ((twig_get_attribute($this->env, $this->source, ($context["settings"] ?? null), "audio_player_lazyload", [], "any", false, false, true, 18) == 1)) {
                echo "none";
            } else {
                echo "auto";
            }
            echo "\" controls ";
            if ((twig_get_attribute($this->env, $this->source, ($context["settings"] ?? null), "audio_player_autoplay", [], "any", false, false, true, 18) == 1)) {
                echo " autoplay ";
            }
            echo " ";
            if ((twig_get_attribute($this->env, $this->source, ($context["settings"] ?? null), "download_button", [], "any", false, false, true, 18) != 1)) {
                echo " controlsList=\"nodownload\" ";
            }
            echo ">
         <source src=\"";
            // line 19
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["file"], "url", [], "any", false, false, true, 19), 19, $this->source), "html", null, true);
            echo "\" type=\"audio/mpeg\">
         Your browser does not support the audio element.
      </audio>
      <label for=\"audiofield-audio-player-";
            // line 22
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["file"], "id", [], "any", false, false, true, 22), 22, $this->source), "html", null, true);
            echo "\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["file"], "description", [], "any", false, false, true, 22), 22, $this->source), "html", null, true);
            echo "</label>
    </div>
  ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['file'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 25
        echo "</div>
";
    }

    public function getTemplateName()
    {
        return "modules/audiofield/templates/audioplayer.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  84 => 25,  73 => 22,  67 => 19,  49 => 18,  46 => 17,  42 => 16,  39 => 15,);
    }

    public function getSourceContext()
    {
        return new Source("", "modules/audiofield/templates/audioplayer.html.twig", "/home/iamasq/drupal/TBA_2021/modules/audiofield/templates/audioplayer.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("for" => 16, "if" => 18);
        static $filters = array("escape" => 18);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['for', 'if'],
                ['escape'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
