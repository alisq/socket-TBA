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

/* modules/insert/templates/insert-image.html.twig */
class __TwigTemplate_3de601ef7211198a8849e5b784f1db581b94d644db514c907688864156215658 extends \Twig\Template
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
        // line 35
        ob_start(function () { return ''; });
        // line 36
        echo "
";
        // line 37
        $context["classes"] = [];
        // line 38
        echo "
";
        // line 39
        if ((($context["style_name"] ?? null) != "image")) {
            // line 40
            echo "  ";
            $context["classes"] = twig_array_merge($this->sandbox->ensureToStringAllowed(($context["classes"] ?? null), 40, $this->source), [0 => ("image-" . $this->sandbox->ensureToStringAllowed(($context["style_name"] ?? null), 40, $this->source))]);
        }
        // line 42
        echo "
";
        // line 43
        if (($context["class"] ?? null)) {
            // line 44
            echo "  ";
            $context["classes"] = twig_array_merge($this->sandbox->ensureToStringAllowed(($context["classes"] ?? null), 44, $this->source), [0 => ($context["class"] ?? null)]);
        }
        // line 46
        echo "
";
        // line 47
        if (($context["url_link"] ?? null)) {
            // line 48
            echo "  <a href=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["url_link"] ?? null), 48, $this->source), "html", null, true);
            echo "\"";
            if (($context["class"] ?? null)) {
                echo " class=\"";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["class"] ?? null), 48, $this->source), "html", null, true);
                echo "\"";
            }
            echo " data-insert-type=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_type"] ?? null), 48, $this->source), "html", null, true);
            echo "\">
";
        }
        // line 50
        echo "
";
        // line 52
        $context["attach"] = ["id" =>         // line 53
($context["id"] ?? null), "attributes" => ["alt" => [0 => "alt", 1 => "description"], "title" => [0 => "title"]]];
        // line 65
        if (twig_get_attribute($this->env, $this->source, ($context["insert_settings"] ?? null), "caption", [], "any", false, false, true, 65)) {
            // line 66
            echo "  ";
            $context["attach"] = twig_array_merge($this->sandbox->ensureToStringAllowed(($context["attach"] ?? null), 66, $this->source), ["attributes" => ["data-caption" => [0 => "title"]]]);
        }
        // line 68
        echo "
<img src=\"";
        // line 69
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["url"] ?? null), 69, $this->source), "html", null, true);
        echo "\"";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["attributes"] ?? null), 69, $this->source), "html", null, true);
        echo " ";
        if ((($context["width"] ?? null) && ($context["height"] ?? null))) {
            echo "width=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["width"] ?? null), 69, $this->source), "html", null, true);
            echo "\" height=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["height"] ?? null), 69, $this->source), "html", null, true);
            echo "\" ";
        }
        if (twig_length_filter($this->env, ($context["classes"] ?? null))) {
            echo " class=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, twig_join_filter($this->sandbox->ensureToStringAllowed(($context["classes"] ?? null), 69, $this->source), " "), "html", null, true);
            echo "\"";
        }
        echo " data-insert-type=\"";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_type"] ?? null), 69, $this->source), "html", null, true);
        echo "\" data-entity-type=\"";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["entity_type"] ?? null), 69, $this->source), "html", null, true);
        echo "\" data-entity-uuid=\"";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["uuid"] ?? null), 69, $this->source), "html", null, true);
        echo "\" data-insert-attach='";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, json_encode($this->sandbox->ensureToStringAllowed(($context["attach"] ?? null), 69, $this->source)), "html", null, true);
        echo "' />

";
        // line 71
        if (($context["url_link"] ?? null)) {
            // line 72
            echo "  </a>
";
        }
        // line 74
        echo "
";
        echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
    }

    public function getTemplateName()
    {
        return "modules/insert/templates/insert-image.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  132 => 74,  128 => 72,  126 => 71,  98 => 69,  95 => 68,  91 => 66,  89 => 65,  87 => 53,  86 => 52,  83 => 50,  69 => 48,  67 => 47,  64 => 46,  60 => 44,  58 => 43,  55 => 42,  51 => 40,  49 => 39,  46 => 38,  44 => 37,  41 => 36,  39 => 35,);
    }

    public function getSourceContext()
    {
        return new Source("", "modules/insert/templates/insert-image.html.twig", "/home/iamasq/drupal/TBA_2021/modules/insert/templates/insert-image.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("spaceless" => 35, "set" => 37, "if" => 39);
        static $filters = array("merge" => 40, "escape" => 48, "length" => 69, "join" => 69, "json_encode" => 69);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['spaceless', 'set', 'if'],
                ['merge', 'escape', 'length', 'join', 'json_encode'],
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
