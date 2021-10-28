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

/* themes/lightship/templates/page.html.twig */
class __TwigTemplate_a59a8170c7e55fe17040faa5152474b678cdb994c718d0447d2d9cf266eb59b7 extends \Twig\Template
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
        // line 45
        echo "<link rel=\"stylesheet\" href=\"https://use.typekit.net/bfv0ypy.css\">


<div class=\"layout-container\">

  <header role=\"banner\" id=\"header\">
    ";
        // line 51
        if ($this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "leaderboard", [], "any", false, false, true, 51))) {
            // line 52
            echo "      <div id=\"leaderboard\">
        ";
            // line 53
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "leaderboard", [], "any", false, false, true, 53), 53, $this->source), "html", null, true);
            echo "
      </div>
    ";
        }
        // line 56
        echo "
    ";
        // line 57
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header", [], "any", false, false, true, 57), 57, $this->source), "html", null, true);
        echo "

  </header>

  ";
        // line 61
        if ((twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "main_menu", [], "any", false, false, true, 61) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "secondary_menu", [], "any", false, false, true, 61))) {
            // line 62
            echo "    <nav id=\"navigation\" class=\"menu";
            if (($context["main_menu"] ?? null)) {
                echo " with-primary";
            }
            if (($context["secondary_menu"] ?? null)) {
                echo " with-secondary";
            }
            echo "\">
      ";
            // line 63
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "main_menu", [], "any", false, false, true, 63), 63, $this->source), "html", null, true);
            echo "
      ";
            // line 64
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "secondary_menu", [], "any", false, false, true, 64), 64, $this->source), "html", null, true);
            echo "
    </nav>";
            // line 66
            echo "  ";
        }
        // line 67
        echo "
  <main role=\"main\">

    ";
        // line 70
        if ($this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "hero", [], "any", false, false, true, 70))) {
            // line 71
            echo "      <div id=\"hero\">
        ";
            // line 72
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "hero", [], "any", false, false, true, 72), 72, $this->source), "html", null, true);
            echo "
      </div>
    ";
        }
        // line 75
        echo "
      <a id=\"main-content\" tabindex=\"-1\"></a>";
        // line 77
        echo "
      ";
        // line 78
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "breadcrumb", [], "any", false, false, true, 78), 78, $this->source), "html", null, true);
        echo "

      ";
        // line 80
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "highlighted", [], "any", false, false, true, 80), 80, $this->source), "html", null, true);
        echo "

      ";
        // line 82
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "help", [], "any", false, false, true, 82), 82, $this->source), "html", null, true);
        echo "

      <div class=\"layout-content\">
        ";
        // line 85
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "content", [], "any", false, false, true, 85), 85, $this->source), "html", null, true);
        echo "
      </div>";
        // line 87
        echo "
      ";
        // line 88
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_first", [], "any", false, false, true, 88)) {
            // line 89
            echo "        <aside class=\"layout-sidebar-first\" role=\"complementary\">
          ";
            // line 90
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_first", [], "any", false, false, true, 90), 90, $this->source), "html", null, true);
            echo "
        </aside>
      ";
        }
        // line 93
        echo "
      ";
        // line 94
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_second", [], "any", false, false, true, 94)) {
            // line 95
            echo "        <aside class=\"layout-sidebar-second\" role=\"complementary\">
          ";
            // line 96
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_second", [], "any", false, false, true, 96), 96, $this->source), "html", null, true);
            echo "
        </aside>
      ";
        }
        // line 99
        echo "
  </main>

  ";
        // line 102
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer", [], "any", false, false, true, 102)) {
            // line 103
            echo "    <footer role=\"contentinfo\" id=\"footer\">
        ";
            // line 104
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer", [], "any", false, false, true, 104), 104, $this->source), "html", null, true);
            echo "
    </footer>
  ";
        }
        // line 107
        echo "
</div>";
    }

    public function getTemplateName()
    {
        return "themes/lightship/templates/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  177 => 107,  171 => 104,  168 => 103,  166 => 102,  161 => 99,  155 => 96,  152 => 95,  150 => 94,  147 => 93,  141 => 90,  138 => 89,  136 => 88,  133 => 87,  129 => 85,  123 => 82,  118 => 80,  113 => 78,  110 => 77,  107 => 75,  101 => 72,  98 => 71,  96 => 70,  91 => 67,  88 => 66,  84 => 64,  80 => 63,  70 => 62,  68 => 61,  61 => 57,  58 => 56,  52 => 53,  49 => 52,  47 => 51,  39 => 45,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/lightship/templates/page.html.twig", "/home/iamasq/drupal/TBA_2021/themes/lightship/templates/page.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 51);
        static $filters = array("render" => 51, "escape" => 53);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['if'],
                ['render', 'escape'],
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
